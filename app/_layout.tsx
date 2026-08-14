import '../global.css';

import { useEffect } from 'react';

import { SplashScreen, Stack } from 'expo-router';

import HeroUIProvider from '@/components/providers/hero-ui';
import useLoadFonts from '@/hooks/use-load-fonts';

// eslint-disable-next-line unicorn/prefer-top-level-await, unicorn/no-top-level-side-effects, unicorn/prefer-await
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
      // eslint-disable-next-line unicorn/prefer-await
      SplashScreen.hideAsync().catch((error: unknown) => {
        console.error('Error hiding splash screen', error);
      });
    }
  }, [areFontsLoaded, fontsError]);

  if (!areFontsLoaded && fontsError) {
    return null;
  }

  return (
    <HeroUIProvider>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </HeroUIProvider>
  );
}
