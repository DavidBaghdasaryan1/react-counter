import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(currentCount => currentCount + 1);
  const decrement = () => setCount(currentCount => currentCount - 1);

  return (
    <div className="counter-container">
      <h1 className="counter-display">{count}</h1>
      <div className="button-container">
        <button className="increment-btn" onClick={increment}>
          Increment
        </button>
        <button className="decrement-btn" onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
