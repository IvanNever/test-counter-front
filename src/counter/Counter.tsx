import { useCounter } from "./useCounter.ts";
import "./counter.css";

function Counter() {
  const { count, increase, decrease } = useCounter();
  return (
    <div className="container">
      <p>Current count is: {count}</p>
      <div className="buttons">
        <button className="decrement" onClick={decrease}>
          Decrease
        </button>
        <button className="increment" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
