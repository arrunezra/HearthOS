import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { collection, doc, getDoc, getFirestore, onSnapshot, query, where } from '@react-native-firebase/firestore';
import auth, { getAuth } from '@react-native-firebase/auth';
import { Box, Text, VStack, HStack } from '@/src/components/HOSGluestackUI';
import { User, ChevronRight } from 'lucide-react-native';
import { scale, moderateScale, verticalScale } from '@/src/utils/scaling';
import ScreenContainer from '@/src/components/ScreenContainer';

interface UserProfile {
    uid: string;
    email: string;
    role: string;
}

export default function UserListScreen({ navigation }: any) {
    const [users, setUsers] = useState<UserProfile[]>([]);
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

                if (myProfile?.role === 'admin') {
                    // Admin Rule: Create a query reference utilizing modern query & where syntax
                    usersQuery = query(usersCollectionRef, where('role', '!=', 'admin'));
                } else {
                    // User Rule: Direct 1-on-1 link ONLY with the Admin accounts profile
                    usersQuery = query(usersCollectionRef, where('role', '==', 'admin'));
                }

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
    return (
        <ScreenContainer showHeader={true} headerTitle="Chats" headerTheme="midnight" showRightIcon={true} rightIconType="close" onRightPress={() => auth().signOut()} scrollable={false}>
            <FlatList
                data={users}
                keyExtractor={item => item.uid}
                contentContainerStyle={{ padding: scale(12) }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ChatScreen', { targetUser: item })}
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
                )}
            />
        </ScreenContainer>
    );
}