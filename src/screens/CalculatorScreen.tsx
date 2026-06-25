// src/screens/CalculatorScreen.tsx
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Box, Input, InputField, Text, VStack, HStack, Button, ButtonText, Switch } from '../components/HOSGluestackUI';
import { Trash2, Plus } from 'lucide-react-native';
// 💡 Import your unified screen layout container
import ScreenContainer from '../components/ScreenContainer';
import { moderateScale, scale, verticalScale } from '../utils/scaling';
import { useNavigation } from '@react-navigation/native';
import firestore, { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from '@react-native-firebase/firestore';
import { getAuth } from '@react-native-firebase/auth';
import { useCustomData } from '../context/CutomProvider';
interface CalculationItem {
    id: string;
    pricePerKg: number;
    weight: number;
    amount: number;
    isUnitBased: boolean;
}

export default function CalculatorScreen() {
    const { role, updateRole, clearUrl } = useCustomData();
    const [pricePerKg, setPricePerKg] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [liveAmount, setLiveAmount] = useState<string>('0.00');
    const [items, setItems] = useState<CalculationItem[]>([]);
    const navigation = useNavigation<any>();
    const [isUnitWise, setIsUnitWise] = useState(false);


    // 1. Dynamic real-time preview calculation
    useEffect(() => {
        const p = parseFloat(pricePerKg);
        const w = parseFloat(weight); // represents weight in grams OR quantity in units

        if (!isNaN(p) && !isNaN(w) && w > 0) {
            // 🎯 Apply calculation formula conditionally based on the active mode toggle
            const calculatedAmount = isUnitWise ? (w * p) : ((w * p) / 1000);
            setLiveAmount(calculatedAmount.toFixed(2));
        } else {
            setLiveAmount('0.00');
        }
    }, [pricePerKg, weight, isUnitWise]); // Add isUnitWise to the dependency array

    // 2. Add calculated item to history list
    const handleAddItem = () => {
        const p = parseFloat(pricePerKg);
        const w = parseFloat(weight);
        const amt = parseFloat(liveAmount);

        if (isNaN(p) || isNaN(w) || w <= 0 || amt <= 0) return;

        const newItem = {
            id: Date.now().toString(),
            pricePerKg: p,
            weight: w,
            amount: amt,
            isUnitBased: isUnitWise // Track mode variant in item profile history if needed
        };

        setItems([newItem, ...items]);
        setWeight('');
    };

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const clearAll = () => {
        setItems([]);
        setPricePerKg('');
        setWeight('');
    };

    const overallTotal = items.reduce((sum, item) => sum + item.amount, 0).toFixed(2);


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
                updateRole('admin')
                // 👑 1. Read global system feature flags config matrix
                const configDoc = await getDoc(doc(db, 'system', 'config'));
                const showUserList = configDoc.data()?.showUserList ?? true;
                //console.log('showUserList', showUserList)
                if (showUserList == true) {
                    // Toggle is ON -> Show standard directory dashboard list layout
                    navigation.navigate('UserListScreen');
                } else {
                    // 🎯 Toggle is OFF -> Find user where isDefault == true and drop admin straight into dialogue
                    const defaultUserQuery = query(collection(db, 'users'), where('isDefault', '==', true), limit(1));
                    const defaultUserSnapshot = await getDocs(defaultUserQuery);

                    if (!defaultUserSnapshot.empty) {
                        const defaultUserDoc = defaultUserSnapshot.docs[0];
                        const targetUser = { uid: defaultUserDoc.id, ...defaultUserDoc.data() };

                        navigation.navigate('ChatScreen', { targetUser: targetUser });
                    } else {
                        // Fallback to directory list frame if no default is assigned yet
                        navigation.navigate('UserListScreen');
                    }
                }
            } else {
                updateRole('user')

                // 👥 Standard User Logic: Connect directly to the admin account
                const adminQuery = query(collection(db, 'users'), where('role', '==', 'admin'), limit(1));
                const adminSnapshot = await getDocs(adminQuery);

                if (!adminSnapshot.empty) {
                    const adminDoc = adminSnapshot.docs[0];
                    const targetAdmin = { uid: adminDoc.id, ...adminDoc.data() };
                    navigation.navigate('ChatScreen', { targetUser: targetAdmin });
                }
            }
        } catch (error) {
            console.error("Navigation routing chain execution break:", error);
        }
    };
    return (
        <ScreenContainer
            showHeader={true}
            headerTitle="KG Price Tool"
            headerTheme="midnight"
            showLogo={true}
            showBackButton={false}
            showRightIcon={false}
            rightIconType="menu"
            scrollable={true}
            role={role}
        >

            <VStack
                style={{
                    marginTop: verticalScale(8),
                    paddingHorizontal: scale(4),
                    gap: verticalScale(20)
                }}
                className="w-full max-w-sm mx-auto"
            >
                {/* Subheading Context Selector */}
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
                {/* 🚀 Dynamic Mode Switcher Bar */}
                <HStack
                    style={{
                        padding: scale(12),
                        borderRadius: scale(12),
                        marginBottom: verticalScale(14)
                    }}
                    className="items-center justify-between bg-slate-100 border border-slate-200"
                >
                    <VStack>
                        <Text style={{ fontSize: moderateScale(14) }} className="font-bold text-slate-800">
                            Calculation Mode
                        </Text>
                        <Text style={{ fontSize: moderateScale(11) }} className="text-slate-500 font-medium">
                            Active: {isUnitWise ? "Unit Wise Calculation" : "Price per KG Calculation"}
                        </Text>
                    </VStack>
                    <Switch
                        size='lg'
                        value={isUnitWise}
                        onValueChange={(val) => {
                            setIsUnitWise(val);
                            setPricePerKg(''); // Reset entries to avoid unexpected value calculation mix-ups
                            setWeight('');
                        }}
                        trackColor={{ false: '#CBD5E1', true: '#F97316' }}
                        thumbColor="#FFFFFF"
                    />
                </HStack>

                {/* Dynamic Primary Input Field */}
                <VStack style={{ gap: verticalScale(6) }}>
                    <Text style={{ fontSize: moderateScale(13) }} className="font-semibold text-slate-500 tracking-wide uppercase">
                        {/* 🚀 Dynamic Label text switches automatically */}
                        {isUnitWise ? "Price per Unit (₹)" : "Price per KG (₹)"}
                    </Text>
                    <Input
                        variant="underlined"
                        style={{
                            height: verticalScale(48),
                            borderBottomWidth: 2,
                            borderColor: '#CBD5E1',
                            alignItems: 'center',
                        }}
                    >
                        <InputField
                            placeholder={isUnitWise ? "e.g. 15" : "e.g. 120"}
                            keyboardType="numeric"
                            value={pricePerKg}
                            onChangeText={setPricePerKg}
                            placeholderTextColor="#94A3B8"
                            style={{
                                fontSize: moderateScale(16),
                                color: '#0F172A',
                                paddingVertical: verticalScale(6),
                            }}
                        />
                    </Input>
                </VStack>

                {/* Dynamic Secondary Input Field */}
                <VStack style={{ gap: verticalScale(6) }}>
                    <Text style={{ fontSize: moderateScale(13) }} className="font-semibold text-slate-500 tracking-wide uppercase">
                        {/* 🚀 Dynamic Label text switches automatically */}
                        {isUnitWise ? "Quantity (Units)" : "Weight (Grams)"}
                    </Text>
                    <Input
                        variant="underlined"
                        style={{
                            height: verticalScale(48),
                            borderBottomWidth: 2,
                            borderColor: '#CBD5E1',
                            alignItems: 'center',
                        }}
                    >
                        <InputField
                            placeholder={isUnitWise ? "e.g. 5" : "e.g. 250"}
                            keyboardType="numeric"
                            value={weight}
                            onChangeText={setWeight}
                            placeholderTextColor="#94A3B8"
                            style={{
                                fontSize: moderateScale(16),
                                color: '#0F172A',
                                paddingVertical: verticalScale(6),
                            }}
                        />
                    </Input>
                </VStack>

                {/* Live Result & Add Button Wrapper */}
                <HStack
                    style={{
                        marginTop: verticalScale(8),
                        padding: scale(16),
                        borderRadius: scale(16),
                        gap: scale(12)
                    }}
                    className="items-center justify-between bg-orange-50 border border-orange-100"
                >
                    <VStack>
                        <Text style={{ fontSize: moderateScale(11) }} className="uppercase tracking-wider font-bold text-orange-600">
                            Current Item
                        </Text>
                        <Text style={{ fontSize: moderateScale(26) }} className="font-black text-orange-700">
                            ₹{liveAmount}
                        </Text>
                    </VStack>

                    <Button
                        size="md"
                        variant="solid"
                        action="primary"
                        onPress={handleAddItem}
                        disabled={parseFloat(liveAmount) === 0}
                        style={{
                            height: verticalScale(44),
                            paddingHorizontal: scale(16),
                            borderRadius: scale(12)
                        }}
                        className="bg-orange-600"
                    >
                        <Plus color="white" size={moderateScale(16)} style={{ marginRight: scale(6) }} />
                        <ButtonText style={{ fontSize: moderateScale(15) }} className="text-white font-bold">
                            Add Item
                        </ButtonText>
                    </Button>
                </HStack>

                {/* Overall Summary Dashboard Card */}
                {items.length > 0 && (
                    <Box
                        style={{
                            paddingHorizontal: scale(20),
                            paddingVertical: verticalScale(16), // Balanced internal padding profile
                            borderRadius: scale(16),
                            marginTop: verticalScale(12),
                            height: verticalScale(90), // Fixed container height for cross-platform alignment stability
                            justifyContent: 'center'  // Centers the row contents vertically inside the card
                        }}
                        className="bg-slate-900 shadow-md"
                    >
                        <VStack style={{ gap: verticalScale(2) }}>
                            <Text
                                style={{ fontSize: moderateScale(11) }}
                                className="text-slate-400 uppercase tracking-wider font-extrabold"
                            >
                                Overall Amount
                            </Text>

                            <HStack
                                style={{
                                    alignItems: 'baseline',    // 🛠️ Aligns text bottoms on the exact same line
                                    justifyContent: 'space-between' // Flushes amount left and count right cleanly
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: moderateScale(34), // Adjusted scale slightly for ideal card frame fit
                                        color: '#FFFFFF',
                                        lineHeight: moderateScale(38) // Prevents clipping on top/bottom of large numeric fonts
                                    }}
                                    className="font-black tracking-tight"
                                >
                                    ₹{overallTotal}
                                </Text>

                                <Text
                                    style={{
                                        fontSize: moderateScale(14),
                                        color: '#94A3B8', // High-visibility soft slate gray
                                        lineHeight: moderateScale(18)
                                    }}
                                    className="font-semibold"
                                >
                                    {items.length} {items.length === 1 ? 'item' : 'items'}
                                </Text>
                            </HStack>
                        </VStack>
                    </Box>
                )}

                {/* Dynamic Calculation Item History List */}
                {items.map((item) => (
                    <HStack
                        key={item.id}
                        style={{ padding: scale(14), borderRadius: scale(12), gap: scale(8) }}
                        className="bg-slate-50 border border-slate-100 justify-between items-center"
                    >
                        <VStack style={{ gap: verticalScale(2) }}>
                            <Text style={{ fontSize: moderateScale(15) }} className="font-bold text-slate-800">
                                {/* 🚀 Render description formatting dynamically based on recorded entry mode */}
                                {item.isUnitBased
                                    ? `${item.weight} Units @ ₹${item.pricePerKg}/unit`
                                    : `${item.weight}g @ ₹${item.pricePerKg}/kg`
                                }
                            </Text>
                        </VStack>

                        <HStack style={{ gap: scale(12) }} className="items-center">
                            <Text style={{ fontSize: moderateScale(17) }} className="font-black text-slate-900">
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