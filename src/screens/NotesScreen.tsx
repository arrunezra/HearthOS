
import React from 'react';
import { Box, Center, Text } from '../components/HOSGluestackUI';

export default function NotesScreen() {
    return (
        <Box className="flex-1 bg-white">
            <Center className="flex-1">
                <Text className="text-lg font-semibold text-gray-700">HearthOS</Text>
                <Text className="text-sm text-gray-400 mt-1">Note Screen</Text>
            </Center>
        </Box>
    );
}