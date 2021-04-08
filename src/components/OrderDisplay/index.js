import { useRecoilState, useSetRecoilState } from 'recoil';

import { order } from '../../state/atoms';
import { orderInfo, addFood, removeFood } from '../../state/selectors';

export const OrderDisplay = () => {
  const [myOrder, setMyOrder] = useRecoilState(order); // similar to useState hook

  // All selectors must be passed in hooks provided by recoil
  const info = useRecoilState(orderInfo); // tuple of allowing BOTH reading and writing to atom
  const removeFoodItem = useSetRecoilState(removeFood); // useSetRecoilState only allows WRITING to atom
  const setAddFood = useSetRecoilState(addFood);
  // Also useRecoilValue allows only READING of atom

  return (
    <div>
      <h3>Current Order</h3>
      {
        myOrder.map((food, i) => {
          return (
            <div key={i}>
              <div
                style={{ display: 'inline-block' }}
                onClick={() => setAddFood(food)}
              >
                {food}
              </div>
              <span
                style={{ marginLeft: '12px', cursor: 'pointer' }}
                onClick={() => removeFoodItem(food)}
              >
                [x]
              </span>
            </div>
          )
        })
      }
      <div>
        <p>Current Price:</p>
        ${info}
      </div>
    </div>
  )
}
