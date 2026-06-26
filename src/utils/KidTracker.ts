import {
    checkBackgroundPermission,
    requestBackgroundPermission,
    startBackgroundLocation,
    stopBackgroundLocation,
    onBackgroundLocation,
    type BackgroundSubscription
} from 'react-native-nitro-geolocation/background';
import { getFirestore, doc, updateDoc, serverTimestamp } from '@react-native-firebase/firestore';

let locationSubscription: BackgroundSubscription | null = null;

/**
 * Handles the complete permission verification check and starts the tracking loop if allowed.
 */
async function startIfAllowed(permission: any, childId: string) {
    const db = getFirestore();

    if (permission.foreground === 'granted' && permission.background === 'granted') {
        try {
            // 🚀 THE FIX: Matched exact configuration types and nested structure
            await startBackgroundLocation({
                trackingMode: 'continuous',
                interval: 60000,
                fastestInterval: 5000,
                distanceFilter: 5, // Kept at 5 meters for child safety tracking accuracy
                persist: true,
                android: {
                    foregroundService: {
                        notificationTitle: 'Radar Safety Guard Active',
                        notificationText: 'Streaming live security location parameters securely.',
                    },
                },
            });

            // Clean up previous streams cleanly before mounting a new observer
            if (locationSubscription) {
                locationSubscription.remove();
                locationSubscription = null;
            }

            // Bind the active JSI callback stream to Firestore
            locationSubscription = onBackgroundLocation(async (location) => {
                const { latitude, longitude, speed, heading } = location.coords;
                try {
                    const userDocRef = doc(db, 'users', childId);
                    await updateDoc(userDocRef, {
                        liveLocation: {
                            latitude,
                            longitude,
                            speed: speed ?? 0,
                            heading: heading ?? 0,
                            updatedAt: serverTimestamp()
                        }
                    });
                    console.log(`[Nitro Engine] Sync Success: ${latitude}, ${longitude}`);
                } catch (err) {
                    console.error("Firestore sync error:", err);
                }
            });

            console.log("[Nitro Controller] Native tracking threads engaged smoothly.");
        } catch (error) {
            console.error("Failed to start background tracking location modules:", error);
        }
    } else {
        console.warn("[Nitro Controller] Location tracking skipped: Permissions are incomplete.", permission);
    }
}

/**
 * Main entrance point called by your tracking dashboard screens.
 */
export const startChildRadarTracking = async (childId: string) => {
    try {
        const permission = await requestBackgroundPermission();

        // If the OS requires redirecting the user to system settings manually
        if (permission.needsSettingsRedirect) {
            console.log("[Nitro Settings] App requires manual Background Location toggle in system settings.");
            // Note: You can call resumeBackgroundTracking() inside your AppState handler when the user returns
            return;
        }

        await startIfAllowed(permission, childId);
    } catch (error) {
        console.error("Error executing background request start validation pipeline:", error);
    }
};

/**
 * Companion check function to resume tracking easily when the app returns to the foreground
 */
export const resumeBackgroundTracking = async (childId: string) => {
    const permission = await checkBackgroundPermission();
    await startIfAllowed(permission, childId);
};

/**
 * Safely completely kills all background services and tracking tasks.
 */
export const stopChildRadarTracking = async () => {
    try {
        await stopBackgroundLocation();

        if (locationSubscription) {
            locationSubscription.remove();
            locationSubscription = null;
        }
        console.log("[Nitro Controller] Background monitoring services stopped cleanly.");
    } catch (error) {
        console.error("Error shutting down Nitro background service channels:", error);
    }
};