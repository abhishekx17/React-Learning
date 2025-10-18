import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount();
  }

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increase}>Increase +1</button>
      <button onClick={decrease}>Decrease -1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
