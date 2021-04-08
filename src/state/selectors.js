import { selector } from 'recoil';
import { order } from './atoms';
import { ORDER_NAMESPACE } from './constants';

// Can move into another file
const priceList = [
  { name: 'cappucino', price: 5 },
  { name: 'latte', price: 7 },
  { name: 'espresso', price: 1.5 },
  { name: 'coffee', price: 4 },
  { name: 'cheesecake', price: 4 },
  { name: 'garlic bread', price: 5 },
];

// Business logic handled via getter/setter selectors
export const orderInfo = selector({
  key: `${ORDER_NAMESPACE}/totalPrice`,
  get: ({ get }) => {
    const listOfOrders = get(order);

    const pricesOfFood = listOfOrders.map((food) => {
      const foodFromList = priceList.find((pricedItem) => pricedItem.name === food);
      return foodFromList ? foodFromList.price : 0;
    });

    return pricesOfFood.reduce((sum, currentItemPrice) => sum + currentItemPrice, 0);
  }
});

export const addFood = selector({
  key: `${ORDER_NAMESPACE}/addFood`,
  set: ({ set, get }, newFood) => {
    // Writable selectors can accumulate a bunch of sets to update state
    set(order, [...get(order), newFood]);
  }
});

export const removeFood = selector({
  key: `${ORDER_NAMESPACE}/removeFood`,
  set: ({ set, get }, foodToRemove) => {
    const currentOrder = get(order);
    const foodToRemoveIndex = currentOrder.findIndex((val => val === foodToRemove));
    set(order, [...currentOrder.slice(0, foodToRemoveIndex), ...currentOrder.slice(foodToRemoveIndex + 1)]);
  }
});
