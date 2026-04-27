import React from 'react';

import { NativeTabs as Tabs } from 'expo-router/unstable-native-tabs';

const tabs = [
  {
    name: 'index',
    title: 'Home',
    icon: 'home'
  },
  {
    name: 'page-one',
    title: 'Page one',
    icon: 'search'
  },
  {
    name: 'page-two',
    title: 'Page two',
    icon: 'person'
  },
  {
    name: 'page-three',
    title: 'Page three',
    icon: 'bookmark'
  }
] as const;

export default function TabsLayout() {
  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Trigger key={tab.name} name={tab.name}>
          <Tabs.Trigger.Icon md={tab.icon} />
          <Tabs.Trigger.Label>{tab.title}</Tabs.Trigger.Label>
        </Tabs.Trigger>
      ))}
    </Tabs>
  );
}
