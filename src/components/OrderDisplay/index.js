import { useRecoilState, useSetRecoilState } from 'recoil';

import { order } from '../../state/atoms';
import { orderInfo, addFood, removeFood } from '../../state/selectors';

export const OrderDisplay = () => {
  // const myOrder = useRecoilValue(order);
  const [myOrder, setMyOrder] = useRecoilState(order);
  const info = useRecoilState(orderInfo);
  const removeFoodItem = useSetRecoilState(removeFood);
  const setAddFood = useSetRecoilState(addFood);

  return (
    <div>
      <h3>Current Order</h3>
      {
        myOrder.map((food, i) => {
          return (
            <div key={i}>
              <div style={{ display: 'inline-block' }}  onClick={() => setAddFood(food)}>
                {food}
              </div>
              <span style={{ marginLeft: '12px', cursor: 'pointer' }} onClick={() => removeFoodItem(food)}>[x]</span>
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
