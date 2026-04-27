import '../global.css';

import React, { useEffect } from 'react';

import { SplashScreen, Stack } from 'expo-router';

import useLoadFonts from '@/hooks/use-load-fonts';

// eslint-disable-next-line unicorn/prefer-top-level-await
SplashScreen.preventAutoHideAsync().catch((error: unknown) => {
  console.error('Error preventing auto hiding splash screen', error);
});

export default function RootLayout() {
  const { areFontsLoaded, fontsError } = useLoadFonts();

  useEffect(() => {
    if (fontsError) {
      throw fontsError;
    }

    if (areFontsLoaded) {
      SplashScreen.hideAsync().catch((error: unknown) => {
        console.error('Error hiding splash screen', error);
      });
    }
  }, [areFontsLoaded, fontsError]);

  if (!areFontsLoaded && fontsError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
}
