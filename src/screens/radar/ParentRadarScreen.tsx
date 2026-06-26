import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { doc, getFirestore, onSnapshot } from '@react-native-firebase/firestore';

Mapbox.setAccessToken('<YOUR_ACCESSTOKEN>');

interface ChildLocation {
    latitude: number;
    longitude: number;
}

export default function ParentRadarScreen({ route }: any) {
    const db = getFirestore();

    const targetChildId = route?.params?.targetChildId;
    const [location, setLocation] = useState<ChildLocation | null>(null);

    useEffect(() => {
        if (!targetChildId) return;

        const unsubscribe = onSnapshot(doc(db, 'users', targetChildId), (snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.data();
                if (userData?.liveLocation) {
                    setLocation({
                        latitude: userData.liveLocation.latitude,
                        longitude: userData.liveLocation.longitude,
                    });
                }
            }
        });

        return () => unsubscribe();
    }, [targetChildId]);
    if (!location) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#EA580C" />
                <Text style={{ marginTop: 10 }}>Connecting to Mapbox Satellite telemetry...</Text>

                {/* 🚀 DEBUG BUTTON: Tap this to simulate a live coordinate stream instantly */}
                <TouchableOpacity
                    onPress={() => setLocation({ latitude: 13.0827, longitude: 80.2707 })} // Mocking Chennai coords
                    style={{ marginTop: 20, padding: 10, backgroundColor: '#EA580C', borderRadius: 8 }}
                >
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Bypass & Use Mock Location</Text>
                </TouchableOpacity>
            </View>
        );
    }
    if (!location) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#EA580C" />
                <Text style={{ marginTop: 10 }}>Connecting to Mapbox Satellite telemetry...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* 🚀 Render the Mapbox Root Canvas View wrapper */}
            <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>

                {/* Sets camera zoom behavior frames and coordinates dynamically */}
                <Mapbox.Camera
                    zoomLevel={14}
                    centerCoordinate={[location.longitude, location.latitude]} // ⚠️ Warning: Mapbox expects [Longitude, Latitude] order!
                    animationMode="flyTo"
                    animationDuration={1500}
                />

                {/* 📍 Mapbox Marker Point Element */}
                <Mapbox.PointAnnotation
                    id="childMarker"
                    coordinate={[location.longitude, location.latitude]}
                >
                    {/* Style your marker visual icon pin */}
                    <View style={styles.markerPin} />
                </Mapbox.PointAnnotation>

            </Mapbox.MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' },
    markerPin: {
        width: 20,
        height: 20,
        backgroundColor: '#EA580C',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#FFFFFF',
    }
});