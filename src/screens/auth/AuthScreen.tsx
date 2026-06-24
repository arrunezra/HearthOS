import React, { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, GoogleAuthProvider } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { scale, moderateScale, verticalScale } from '@/src/utils/scaling';
import GradientView from '@/src/components/GradientView';
import { Box, Text, Button, ButtonText } from '@/src/components/HOSGluestackUI';
import FastImage from '@d11/react-native-fast-image';
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, serverTimestamp, setDoc, where, writeBatch } from '@react-native-firebase/firestore';

export default function AuthScreen() {
    const navigation = useNavigation<any>();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // 🎯 Track loading spinner state

    const handleGoogleLogin = async () => {
        try {
            setError('');
            setLoading(true); // 🚀 Start loading spinner

            // 1. Trigger the native Google Sign-In tray
            const response = await GoogleSignin.signIn();
            const idToken = response.data?.idToken;

            if (!idToken) {
                throw new Error('No ID Token retrieved from Google authentication.');
            }

            // 2. Authenticate with Firebase Core Auth
            const googleCredential = GoogleAuthProvider.credential(idToken);
            const userCredential = await getAuth().signInWithCredential(googleCredential);
            const user = userCredential.user;

            // 3. Document pipeline: Reference user profile document via Modular SDK
            const db = getFirestore();
            const userRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userRef);
            const isNewUser = !userDoc.exists(); // 🔍 Check if this account is completely brand new
            const existingData = userDoc.data();

            // 🛡️ Fallback evaluation: Keep roles intact or initialize to standard 'user'
            const finalRole = existingData?.role || 'user';

            // 🎯 Determine dynamic isDefault state rules
            let dynamicIsDefault = false;
            if (isNewUser) {
                // New user rules: The incoming user becomes the new primary active user connection
                dynamicIsDefault = true;

                // 🧼 Database operation: Reset all other existing users' default flags to false
                const batch = writeBatch(db);
                const usersCollectionRef = collection(db, 'users');
                const activeUsersQuery = query(usersCollectionRef, where('isDefault', '==', true));
                const activeUsersSnapshot = await getDocs(activeUsersQuery);

                activeUsersSnapshot.forEach((targetedDoc) => {
                    batch.update(targetedDoc.ref, { isDefault: false });
                });

                // Execute the batch rewrite concurrently before finalizing the new profile creation
                await batch.commit();
            } else {
                // Returning user rules: Maintain their existing property value state safely
                dynamicIsDefault = existingData?.isDefault ?? false;
            }

            // 4. Update the current user document profile structure using setDoc
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName || user.email?.split('@')[0],
                photoURL: user.photoURL || '',
                role: finalRole,
                isDefault: dynamicIsDefault, // 🔥 Saves true for new users, retains old state for existing ones
                lastLogin: serverTimestamp(),
            }, { merge: true });

            console.log('finalRole', finalRole);

            // 5. Root Navigation router handling with Config Checking
            if (finalRole === 'admin') {
                // 👑 Admin Navigation Rule: Read system preferences toggle state first
                const configDocRef = doc(db, 'system', 'config');
                const configDoc = await getDoc(configDocRef);
                const showUserList = configDoc.data()?.showUserList ?? true;

                if (showUserList) {
                    // Config ON -> Show entire registry selection screen
                    navigation.replace('UserListScreen');
                } else {
                    // Config OFF -> Find the default user where isDefault == true
                    const usersCollectionRef = collection(db, 'users');
                    const defaultUserQuery = query(usersCollectionRef, where('isDefault', '==', true), limit(1));
                    const defaultUserSnapshot = await getDocs(defaultUserQuery);

                    if (!defaultUserSnapshot.empty) {
                        const defaultUserDoc = defaultUserSnapshot.docs[0];
                        const targetUser = { uid: defaultUserDoc.id, ...defaultUserDoc.data() };

                        // Connect admin directly to default user channel
                        navigation.replace('ChatScreen', { targetUser: targetUser });
                    } else {
                        // Fallback to List if no user is marked as default yet
                        navigation.replace('UserListScreen');
                    }
                }
            } else {
                // 👥 Standard User Navigation Rule: Direct 1-to-1 matching admin stream lookup
                const usersCollectionRef = collection(db, 'users');
                const adminQuery = query(usersCollectionRef, where('role', '==', 'admin'), limit(1));
                const adminSnapshot = await getDocs(adminQuery);

                if (!adminSnapshot.empty) {
                    const adminDoc = adminSnapshot.docs[0];
                    const targetAdmin = { uid: adminDoc.id, ...adminDoc.data() };

                    navigation.replace('ChatScreen', { targetUser: targetAdmin });
                } else {
                    setError('No workspace Administrator profile detected.');
                }
            }

        } catch (err: any) {
            console.error('Google Sign-In Error Details:', err);
            setError(err.message || 'Google sign-in authorization aborted.');
        } finally {
            setLoading(false); // 🧼 Close spinner
        }
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
        >
            <GradientView
                colors={['#defbf1ff', '#ffffffff', '#1e473aff']}
                horizontal={false}
                style={{ flex: 1 }}
            >
                <ScrollView
                    className="flex-1 bg-transparent"
                    keyboardShouldPersistTaps="handled"
                    /* 🎯 FIX: Center the items vertically directly on the scroll content layout canvas */
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    {/* Main Content Layout Block Frame */}
                    <Box className="w-full max-w-[340px] px-6">

                        {/* Logo Section */}
                        <Box className="items-center mb-6 gap-10">
                            <FastImage
                                source={require('@/src/assets/logo.png')}
                                style={{ width: scale(160), height: scale(160), marginBottom: verticalScale(20) }}
                                resizeMode="cover"
                            />
                            <Box className="items-center">
                                {/* 🎯 FIX: Changed typography colors to slate-800/slate-500 to cleanly match the visual palette */}
                                <Text style={{ fontSize: moderateScale(28) }} className="font-extrabold mb-1 text-slate-800 tracking-tight text-center">
                                    Welcome Back
                                </Text>

                                <Text style={{ fontSize: moderateScale(15) }} className="text-center text-slate-500 font-medium">
                                    Sign in to continue to your account
                                </Text>
                            </Box>
                        </Box>

                        {/* Error Feedback Message Wrapper */}
                        {error ? (
                            <Text style={{ fontSize: moderateScale(13), marginBottom: verticalScale(12) }} className="text-red-500 font-semibold text-center">
                                {error}
                            </Text>
                        ) : null}

                        {/* Google Authentication Trigger Button */}
                        <Button
                            size="md"
                            variant="outline"
                            onPress={handleGoogleLogin}
                            disabled={loading}
                            style={{
                                height: verticalScale(46),
                                borderRadius: scale(14),
                                borderColor: '#E2E8F0',
                                width: '100%',
                                justifyContent: 'center',
                                elevation: 2,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.05,
                                shadowRadius: 3,
                                opacity: loading ? 0.6 : 1
                            }}
                            className="bg-white active:bg-slate-50"
                        >
                            {loading ? (
                                <ActivityIndicator size="small" color="#E65100" />
                            ) : (
                                <ButtonText style={{ color: '#1E293B', fontSize: moderateScale(15) }} className="font-bold">
                                    Continue with Google
                                </ButtonText>
                            )}
                        </Button>

                    </Box>
                </ScrollView>
            </GradientView>
        </KeyboardAvoidingView>
    );

}