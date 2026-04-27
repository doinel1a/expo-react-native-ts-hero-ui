import React from 'react';

import { Text } from './tw';

type TSalute = Readonly<{
  text: string;
}>;

export default function Salute({ text }: TSalute) {
  return <Text className='text-xl font-semibold'>{text}</Text>;
}
