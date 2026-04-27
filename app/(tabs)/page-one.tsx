import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Salute from '@/components/salute';

export default function PageOne() {
  return (
    <View className='flex flex-1 flex-col items-center justify-center'>
      <StatusBar style='auto' />

      <Salute text='Hello, Page one!' />
    </View>
  );
}
