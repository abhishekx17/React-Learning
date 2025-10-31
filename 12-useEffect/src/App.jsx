import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green')

  useEffect(() => {
    document.title = `Count: ${count} ${color}`
  }, [count,color])
  

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const removeCount = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor((c) => c === "green" ? "red" : "green")
  }

  return (
    <>
      <h1 style={{color: color}} >Count: {count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={removeCount}>Remove</button>
      <button onClick={changeColor} >Change Color</button>
    </>
  );
};

export default App;
