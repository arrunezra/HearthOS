import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, Alert, TouchableOpacity, FlatList } from 'react-native'; // 🚀 Import TouchableOpacity 
import { Radar, ArrowRight, ShieldCheck, User, ChevronRight } from 'lucide-react-native';
import {
    VStack,
    HStack,
    Box,
    Text,
    Input,
    InputField
    // 🛑 REMOVE: Button, ButtonText from here to prevent context parsing errors
} from '@/src/components/HOSGluestackUI';
import { collection, doc, getDoc, getFirestore, onSnapshot, query, where } from '@react-native-firebase/firestore';
import ScreenContainer from '../components/ScreenContainer';
import { moderateScale, scale, verticalScale } from '../utils/scaling';
import { getAuth } from '@react-native-firebase/auth/lib/modular';
interface UserProfile {
    uid: string;
    email: string;
    role: string;
}
export default function TrackerScreen({ navigation }: any) {
    const [users, setUsers] = useState<UserProfile[]>([]);

    const [trackerId, setTrackerId] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const db = getFirestore();
    const currentUser = getAuth().currentUser;
    useEffect(() => {
        if (!currentUser) return;

        let unsubscribeUsers: () => void;
        const db = getFirestore(); // Initialize the modular database reference instance

        // 🎯 Use modular doc() and getDoc() helpers
        const userDocRef = doc(db, 'users', currentUser.uid);

        getDoc(userDocRef)
            .then((docSnap) => {
                if (!docSnap.exists) {
                    console.log("User profile document does not exist in Firestore.");
                    return;
                }

                const myProfile = docSnap.data();
                const usersCollectionRef = collection(db, 'users');
                let usersQuery;


                // Admin Rule: Create a query reference utilizing modern query & where syntax
                usersQuery = query(usersCollectionRef, where('role', '!=', 'admin'));


                // 🎯 Open the database stream listener using functional onSnapshot()
                unsubscribeUsers = onSnapshot(
                    usersQuery,
                    (snap) => {
                        if (!snap) return;

                        const list = snap.docs.map(
                            (d) => ({ uid: d.id, ...d.data() } as UserProfile)
                        );
                        console.log(`Users filtered by role rules:`, list);
                        setUsers(list);
                    },
                    (error) => {
                        console.error("User data streaming sequence broken:", error);
                    }
                );
            })
            .catch((err) => {
                console.error("Failed to fetch initial profile doc:", err);
            });

        // 🧼 Cleanup: Unsubscribe from firestore data streams cleanly
        return () => {
            if (unsubscribeUsers) unsubscribeUsers();
        };
    }, [currentUser]);

    const handleConnectTracker = async () => {
        const cleanId = trackerId.trim();
        if (!cleanId) {
            Alert.alert("Required", "Please enter a valid Tracker ID.");
            return;
        }

        setIsValidating(true);
        try {
            const childSnapshot = await getDoc(doc(db, 'users', cleanId));
            if (childSnapshot.exists()) {
                const profile = childSnapshot.data();
                console.log('profile', profile)
            }

            if (!childSnapshot.exists()) {
                Alert.alert("Connection Failed", "No tracking profile found matching this ID.");
                setIsValidating(false);
                return;
            }

            setIsValidating(false);
            // 🚀 Force navigation execution straight through the native prop injection layer
            navigation.navigate('ParentRadarScreen', { targetChildId: cleanId });
        } catch (error) {
            console.error(error);
            Alert.alert("Database Error", "Failed to query active cloud terminal nodes.");
            setIsValidating(false);
        }
    };

    return (
        <ScreenContainer showHeader={false} scrollable={false}  >
            <VStack style={{ flex: 1, paddingHorizontal: scale(24), justifyContent: 'center', gap: verticalScale(28) }}>

                {/* Visual Branding Cluster */}
                <VStack style={{ alignItems: 'center', gap: verticalScale(12) }}>
                    <Box style={styles.iconCircle} className="bg-orange-100 border border-orange-200">
                        <Radar color="#EA580C" size={scale(36)} />
                    </Box>
                    <VStack style={{ alignItems: 'center', gap: verticalScale(4) }}>
                        <Text style={{ fontSize: moderateScale(24) }} className="font-black text-slate-900 tracking-tight text-center">
                            Kids Radar Link
                        </Text>
                        <Text style={{ fontSize: moderateScale(14) }} className="text-slate-500 font-medium text-center">
                            Enter your child's unique device hardware terminal key code to track their live location.
                        </Text>
                    </VStack>
                </VStack>

                <FlatList
                    data={users}
                    keyExtractor={item => item.uid}
                    contentContainerStyle={{ padding: scale(12) }}
                    renderItem={({ item }) => {
                        console.log('item', item);
                        return <TouchableOpacity
                            onPress={() => {

                                navigation.navigate('ParentRadarScreen', { targetChildId: item.uid });
                            }}
                            style={{ padding: scale(14), borderRadius: scale(12), marginBottom: verticalScale(10) }}
                            className="bg-slate-50 border border-slate-100"
                        >
                            <HStack className="justify-between items-center">
                                <HStack style={{ gap: scale(12) }} className="items-center">
                                    <Box style={{ width: scale(40), height: scale(40), borderRadius: scale(20) }} className="bg-slate-200 items-center justify-center">
                                        <User color="#64748B" size={scale(20)} />
                                    </Box>
                                    <VStack>
                                        <Text style={{ fontSize: moderateScale(15) }} className="font-bold text-slate-800">{item.email.split('@')[0]}</Text>
                                        <Text style={{ fontSize: moderateScale(12) }} className="text-slate-400 capitalize">{item.role}</Text>
                                    </VStack>
                                </HStack>
                                <ChevronRight color="#94A3B8" size={scale(18)} />
                            </HStack>
                        </TouchableOpacity>
                    }}
                />
            </VStack>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    iconCircle: { width: scale(72), height: scale(72), borderRadius: scale(36), alignItems: 'center' },
    inputContainer: { height: verticalScale(54), paddingHorizontal: scale(16), alignItems: 'center' },
    inputText: { fontSize: moderateScale(15), color: '#0F172A', fontWeight: 'bold' },
    actionButton: { height: verticalScale(50), borderRadius: scale(16), justifyContent: 'center', alignItems: 'center' },
    securityBadge: { gap: scale(6), alignItems: 'center', justifyContent: 'center', paddingVertical: verticalScale(10), borderRadius: scale(12), marginTop: verticalScale(20) }
});