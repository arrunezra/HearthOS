// src/screens/TrackerScreen.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
//import MapView, { Marker } from 'react-native-maps';
//mport firestore from '@react-native-firebase/firestore';
import { Box, Text } from '../components/HOSGluestackUI';

interface ChildLocation {
    latitude: number;
    longitude: number;
    lastUpdated: any;
}

export default function TrackerScreen() {
    const [kidLocation, setKidLocation] = useState<ChildLocation | null>(null);

    //   useEffect(() => {
    //     // Listen to real-time database updates from the kid's streaming phone database entry
    //     const unsubscribe = firestore()
    //       .collection('locations')
    //       .doc('child_device_1')
    //       .onSnapshot(documentSnapshot => {
    //         if (documentSnapshot.exists) {
    //           setKidLocation(documentSnapshot.data() as ChildLocation);
    //         }
    //       });

    //     return () => unsubscribe();
    //   }, []);

    return (
        <Box className="flex-1 bg-gray-100">
            {kidLocation ? (
                // <MapView
                //   style={styles.map}
                //   initialRegion={{
                //     latitude: kidLocation.latitude,
                //     longitude: kidLocation.longitude,
                //     latitudeDelta: 0.015,
                //     longitudeDelta: 0.0121,
                //   }}
                // >
                //   <Marker
                //     coordinate={{
                //       latitude: kidLocation.latitude,
                //       longitude: kidLocation.longitude,
                //     }}
                //     title="Kid's Current Location"
                //     description="Live stream tracking from HearthOS background sync"
                //   />
                // </MapView>
                null
            ) : (
                <Box className="flex-1 justify-center items-center p-6">
                    <Text className="text-gray-500 font-medium">Awaiting live location signal from child device...</Text>
                </Box>
            )}
        </Box>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});