import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const countUp = () => {
    count < 20 ? setCount((prevCount) => prevCount + 1) : setCount((prevCount) => prevCount);
  };

  const countDown = () => {
    count > 0 ? setCount((prevCount) => prevCount - 1) : setCount((prevCount) => prevCount);
  };

  const reset = () => {
    setCount(1)
  }

  return (
    <>
      <h1 onClick={reset}>{count}</h1>
      <div className="buttonContainer">
        <button onClick={countUp} disabled={count >= 20}>Count +</button>
        <button onClick={countDown} disabled={count <= 0}>Count -</button>
      </div>
    </>
  );
}

export default App;
