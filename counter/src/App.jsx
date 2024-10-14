import { useState } from "react";
import { flushSync } from "react-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrementValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>Counter app</h1>
      <p>Count: {counter}</p>
      <button onClick={incrementValue}>increment</button>
      <button onClick={decrementValue}>decrement</button>
    </>
  );
}

export default App;
