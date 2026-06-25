// src/navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalculatorScreen from '../screens/CalculatorScreen';
import TrackerScreen from '../screens/TrackerScreen';
import { Calculator, Radar, Wallet } from '../components/HOSIconUI';
import { scale, verticalScale } from '../utils/scaling';
import ParentRadarScreen from '../screens/radar/ParentRadarScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#E65100',
                tabBarInactiveTintColor: '#757575',
                tabBarStyle: {
                    height: verticalScale(62),
                    paddingBottom: verticalScale(8),
                    paddingTop: verticalScale(8)
                },
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    switch (route.name) {
                        case 'Calculator': return <Calculator color={color} size={size} />;
                        case 'Tracker': return <Radar color={color} size={size} />;
                        default: return <Wallet color={color} size={size} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'KG Price Tool' }} />
            <Tab.Screen name="Tracker" component={TrackerScreen} options={{ title: 'Kid Radar' }} />
        </Tab.Navigator>
    );
}