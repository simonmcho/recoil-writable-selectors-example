import { RecoilRoot } from 'recoil';
import { OrderDisplay } from './components/OrderDisplay'

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <OrderDisplay />
      </div>
    </RecoilRoot>
  );
}

export default App;
