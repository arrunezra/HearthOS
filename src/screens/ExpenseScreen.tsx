
import React from 'react';
import { Box, Center, Text } from '../components/HOSGluestackUI';

export default function ExpenseScreen() {
  return (
    <Box className="flex-1 bg-white">
      <Center className="flex-1">
        <Text className="text-lg font-semibold text-gray-700">HearthOS Finance Module</Text>
        <Text className="text-sm text-gray-400 mt-1">Ready for schema configuration</Text>
      </Center>
    </Box>
  );
}