import { atom } from 'recoil';

export const order = atom({
  key: 'order',
  default: ['garlic bread', 'coffee', 'tea'],
})