import { atom } from 'recoil';
import { ORDER_NAMESPACE } from './constants';

const initialOrderState = ['garlic bread', 'coffee', 'tea'];

// Define your namespacing and default state here
export const order = atom({
  key: ORDER_NAMESPACE,
  default: initialOrderState,
})