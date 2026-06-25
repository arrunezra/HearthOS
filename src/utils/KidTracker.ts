import BackgroundService from 'react-native-background-actions';
import Geolocation from 'react-native-geolocation-service';
import { doc, updateDoc, serverTimestamp, getFirestore } from 'firebase/firestore';

const sleep = (time: number) => new Promise((resolve) => setTimeout(() => resolve, time));

// This task will run forever, even if the user minimizes the app
const locationTrackingTask = async (taskDataArguments?: { childId: string }) => {
    const childId = taskDataArguments?.childId;
    const db = getFirestore();
    if (!childId) return;

    while (BackgroundService.isRunning()) {

        Geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude, speed, heading } = position.coords;
                try {
                    // Update child tracking terminal node coordinates
                    await updateDoc(doc(db, 'users', childId), {
                        liveLocation: {
                            latitude,
                            longitude,
                            speed,
                            heading,
                            updatedAt: serverTimestamp()
                        }
                    });
                    console.log(`[Radar Engine] Sent tracking ping: ${latitude}, ${longitude}`);
                } catch (err) {
                    console.error("Firestore coordinates sync broken:", err);
                }
            },
            (error) => console.error("[Radar Geolocation Error]", error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );

        // Interval rate limit buffer delay (e.g., update every 15 seconds)
        await sleep(15000);
    }
};

export const startChildRadarTracking = async (childId: string) => {
    const options = {
        taskName: 'KidRadarSync',
        taskTitle: 'Radar Safety Guard Active',
        taskDesc: 'Streaming live security location parameters securely.',
        taskIcon: { name: 'ic_launcher', type: 'mipmap' },
        color: '#EA580C',
        parameters: { childId },
    };

    await BackgroundService.start(locationTrackingTask, options);
};

export const stopChildRadarTracking = async () => {
    await BackgroundService.stop();
};