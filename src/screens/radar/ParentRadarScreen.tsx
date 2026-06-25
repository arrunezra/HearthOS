import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Text } from 'react-native';
// 🚀 1. Import UrlTile along with MapView and Marker
import MapView, { Marker, UrlTile } from 'react-native-maps';
import { doc, getFirestore, onSnapshot } from '@react-native-firebase/firestore';

interface ChildLocation {
    latitude: number;
    longitude: number;
    updatedAt: any;
}

export default function ParentRadarScreen({ route, navigation }: any) {
    // 🚀 1. Use optional chaining so it reads undefined instead of throwing a hard crash error
    const targetChildId = route?.params?.targetChildId;

    const [location, setLocation] = useState<ChildLocation | null>(null);
    const mapRef = useRef<MapView | null>(null);
    const db = getFirestore();

    useEffect(() => {
        // 🚀 2. If no ID was provided, stop execution immediately to prevent Firestore failures
        if (!targetChildId) {
            console.error("[Radar Diagnostic] No targetChildId was passed to this screen route.");
            return;
        }

        const unsubscribe = onSnapshot(doc(db, 'users', targetChildId), (snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.data();
                if (userData?.liveLocation) {
                    const newLoc = userData.liveLocation as ChildLocation;
                    setLocation(newLoc);

                    mapRef.current?.animateToRegion({
                        latitude: newLoc.latitude,
                        longitude: newLoc.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }, 1000);
                }
            }
        });

        return () => unsubscribe();
    }, [targetChildId]);

    // 🚀 3. Show a friendly warning UI if the child parameter packet is completely missing
    if (!targetChildId) {
        return (
            <View style={styles.center}>
                <Text style={{ color: '#EF4444', fontWeight: 'bold' }}>Configuration Error</Text>
                <Text style={{ color: '#64748B', textAlign: 'center', marginTop: 4, paddingHorizontal: 20 }}>
                    Unable to load tracking array map interface because no child account identification packet was supplied.
                </Text>
            </View>
        );
    }

    if (!location) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#EA580C" />
                <Text style={{ marginTop: 10 }}>Locating child signal matrix...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* 🚀 2. REMOVE provider={PROVIDER_GOOGLE} to force standard native map layout elements */}
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                {/* 🚀 3. ADD the open-source OpenStreetMap Tile overlay engine */}
                <UrlTile
                    urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maximumZ={19}
                    flipY={false}
                />

                <Marker
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    title="Child Location"
                    description="Live Tracking Stream Active"
                    pinColor="#EA580C"
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }
});