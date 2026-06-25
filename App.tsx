// App.tsx
import '@/global.css';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
// Import Navigation stacks & Auth View
import AppNavigator from './src/navigation/AppNavigator';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';
import { Box } from './src/components/HOSGluestackUI';
import AuthScreen from './src/screens/auth/AuthScreen';
import { ThemeProvider } from './components/ui/ThemeProvider/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from "react-native-keyboard-controller";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './src/screens/chat/UserListScreen';
import ChatScreen from './src/screens/ChatScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { GiphySDK } from '@giphy/react-native-sdk';
import { AlertProvider } from './src/context/AlertContext';
import { CustomProvider } from './src/context/CutomProvider';
export default function App() {
  GiphySDK.configure({ apiKey: '3eYpltnNfxpbEHbBeodZ9EDIId4zVb4B' });
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Configure Google Sign-in inside your root index or here
  GoogleSignin.configure({
    webClientId: '450020064775-1mhqiii163mmgnjm0ic4pq7vsb20s37a.apps.googleusercontent.com', // Get from Firebase Settings
    offlineAccess: true,
    scopes: ['profile', 'email']
  });
  // Sync user session state directly from native modules hooks
  useEffect(() => {
    // 1. Get the initialized auth instance using the modular method
    const authInstance = getAuth();

    // 2. Pass the instance directly into the modular listener wrapper
    const subscriber = onAuthStateChanged(authInstance, (currentUser) => {
      //console.log('currentUser updated:', currentUser);
      setUser(currentUser);

      if (initializing) {
        setInitializing(false);
      }
    });

    // 3. Unsubscribe on layout unmount streamgetAuth
    return () => subscriber();
  }, [initializing]);

  // Loading splash while Firebase reads session storage updates
  if (initializing) {
    return (
      <GluestackUIProvider>
        <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <ActivityIndicator size="large" color="#E65100" />
        </Box>
      </GluestackUIProvider>
    );
  }
  const RootStack = createStackNavigator();
  return (

    <ThemeProvider>
      <SafeAreaProvider>
        <KeyboardProvider>
          <CustomProvider>
            <AlertProvider>
              <NavigationContainer>
                <RootStack.Navigator screenOptions={{ headerShown: false }}>
                  <RootStack.Screen name="MainTabs" component={AppNavigator} />
                  <RootStack.Screen
                    name="AuthScreen"
                    component={AuthScreen}
                    options={{ presentation: 'modal' }}
                  />
                  {/* 🎯 3. Shared Target Routes explicitly shared at root level */}
                  <RootStack.Screen name="UserListScreen" component={UserListScreen} />
                  <RootStack.Screen name="ChatScreen" component={ChatScreen} />
                  <RootStack.Screen name="Settings" component={SettingsScreen} />
                </RootStack.Navigator>
              </NavigationContainer>
            </AlertProvider>
          </CustomProvider>
        </KeyboardProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}