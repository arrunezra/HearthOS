import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { getFirestore, doc, onSnapshot, updateDoc, setDoc } from '@react-native-firebase/firestore';
import { VStack, HStack, Text, Switch, Box, Center } from '../components/HOSGluestackUI';
import { scale, moderateScale, verticalScale } from '../utils/scaling';
import ScreenContainer from '../components/ScreenContainer';

export default function SettingsScreen() {
    const [loading, setLoading] = useState(true);
    const [showUserList, setShowUserList] = useState(true);
    const db = getFirestore();

    useEffect(() => {
        // 🎯 Stream configuration settings live from Firestore config path
        const configDocRef = doc(db, 'system', 'config');

        const unsubscribe = onSnapshot(configDocRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data();
                setShowUserList(data?.showUserList ?? true);
            }
            setLoading(false);
        }, (error) => {
            console.error("Failed to sync system config matrix:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleToggleSwitch = async (value: boolean) => {
        // 1. Instantly flip the state locally for smooth UI response
        setShowUserList(value);

        try {
            const configDocRef = doc(db, 'system', 'config');

            await setDoc(configDocRef, {
                showUserList: value
            }, { merge: true });

            console.log("System config updated successfully.");
        } catch (error: any) {
            // 2. 🚀 THE FIX: Roll back the visual switch state if Firestore blocks the write
            setShowUserList(!value);

            if (error.code === 'permission-denied') {
                Alert.alert("Access Denied", "You do not have administrative privileges to modify this configuration.");
            } else {
                Alert.alert("Error", "Failed to update configuration settings property.");
            }
            console.error("Write unauthorized or broken:", error);
        }
    };

    if (loading) {
        return (
            <ScreenContainer showHeader={true} headerTitle="Settings" headerTheme="midnight">
                <Center className="flex-1">
                    <ActivityIndicator size="large" color="#E65100" />
                </Center>
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer
            showHeader={true}
            headerTitle="Workspace Settings"
            headerTheme="midnight"
            showLogo={false}
            showBackButton={true}
        >
            <VStack style={{ padding: scale(20), gap: verticalScale(16) }} className="w-full max-w-sm mx-auto">
                <Text style={{ fontSize: moderateScale(14) }} className="font-bold text-slate-400 tracking-wider uppercase">
                    Admin Preferences
                </Text>

                {/* TOGGLE ROW SEPARATOR */}
                <HStack style={{ padding: scale(16), borderRadius: scale(16) }} className="bg-slate-50 border border-slate-100 justify-between items-center">
                    <VStack style={{ flex: 1, paddingRight: scale(12), gap: verticalScale(2) }}>
                        <Text style={{ fontSize: moderateScale(16) }} className="font-extrabold text-slate-800">
                            Chat Directory Listing
                        </Text>
                        <Text style={{ fontSize: moderateScale(12) }} className="text-slate-500 font-medium">
                            {showUserList
                                ? "Admin routes directly to complete user registry."
                                : "Admin bypasses list and routes directly to the default user profile."
                            }
                        </Text>
                    </VStack>

                    <Switch
                        value={showUserList}
                        onValueChange={handleToggleSwitch}
                        trackColor={{ false: '#CBD5E1', true: '#FFCC80' }}
                        thumbColor={showUserList ? '#E65100' : '#94A3B8'}
                    />
                </HStack>
            </VStack>
        </ScreenContainer>
    );
}