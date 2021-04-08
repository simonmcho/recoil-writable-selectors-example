import { selector } from 'recoil';
import { order } from './atoms';

const priceList = [
  { name: 'cappucino', price: 5 },
  { name: 'latte', price: 7 },
  { name: 'espresso', price: 1.5 },
  { name: 'coffee', price: 4 },
  { name: 'cheesecake', price: 4 },
  { name: 'garlic bread', price: 5 },
]


export const orderInfo = selector({
  key: '@order/totalPrice',
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
  key: '@order/addFood',
  set: ({ set, get }, newFood) => {
    console.log('add food setter', get(order))
    console.log('order', order)
    set(order, [...get(order), newFood]);
  }
});

export const removeFood = selector({
  key: '@order/removeFood',
  set: ({ set, get }, foodToRemove) => {
    console.log('remove food setter', foodToRemove)
    const currentOrder = get(order);
    const foodToRemoveIndex = currentOrder.findIndex((val => val === foodToRemove));
    set(order, [...currentOrder.slice(0, foodToRemoveIndex), ...currentOrder.slice(foodToRemoveIndex + 1)]);
  }
});
