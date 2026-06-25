import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native'; // 🚀 Import TouchableOpacity 
import { Radar, ArrowRight, ShieldCheck } from 'lucide-react-native';
import {
    VStack,
    HStack,
    Box,
    Text,
    Input,
    InputField
    // 🛑 REMOVE: Button, ButtonText from here to prevent context parsing errors
} from '@/src/components/HOSGluestackUI';
import { doc, getDoc, getFirestore } from '@react-native-firebase/firestore';
import ScreenContainer from '../components/ScreenContainer';
import { moderateScale, scale, verticalScale } from '../utils/scaling';

export default function TrackerScreen({ navigation }: any) {
    const [trackerId, setTrackerId] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const db = getFirestore();
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

                {/* Input Segment */}
                <VStack style={{ gap: verticalScale(8) }}>
                    <Text style={{ fontSize: moderateScale(12) }} className="font-bold text-slate-400 uppercase tracking-wider">
                        Secure Tracker ID Key Token
                    </Text>
                    <Input variant="outline" style={styles.inputContainer} className="bg-slate-50 border-2 border-slate-200 rounded-2xl">
                        <InputField
                            placeholder="e.g. WXz8923KJlsd8912K"
                            placeholderTextColor="#94A3B8"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={trackerId}
                            onChangeText={setTrackerId}
                            editable={!isValidating}
                            style={styles.inputText}
                        />
                    </Input>
                </VStack>

                {/* 🚀 FIXED: Swapped out Gluestack Button for standard high-contrast TouchableOpacity */}
                <TouchableOpacity
                    onPress={handleConnectTracker}
                    disabled={isValidating || !trackerId.trim()}
                    activeOpacity={0.8}
                    style={[
                        styles.actionButton,
                        { backgroundColor: !trackerId.trim() ? '#CBD5E1' : '#EA580C' }
                    ]}
                >
                    {isValidating ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                        <HStack style={{ gap: scale(8), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: moderateScale(16), color: '#FFFFFF', fontWeight: '800' }}>
                                Initialize Radar Matrix
                            </Text>
                            <ArrowRight color="white" size={moderateScale(18)} />
                        </HStack>
                    )}
                </TouchableOpacity>

                {/* Bottom Security Banner */}
                <HStack style={styles.securityBadge} className="bg-slate-50 border border-slate-100">
                    <ShieldCheck color="#64748B" size={scale(16)} />
                    <Text style={{ fontSize: moderateScale(11) }} className="text-slate-400 font-semibold tracking-wide uppercase">
                        AES-256 Cloud Encrypted Position Streams
                    </Text>
                </HStack>

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