import React from 'react';

import type { HeroUINativeConfig } from 'heroui-native';
import type { PropsWithChildren } from 'react';

import { HeroUINativeProvider } from 'heroui-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const config: HeroUINativeConfig = {
  devInfo: {
    stylingPrinciples: false
  }
};

type THeroUIProvider = Readonly<PropsWithChildren>;

export default function HeroUIProvider({ children }: THeroUIProvider) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider config={config}>{children}</HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
