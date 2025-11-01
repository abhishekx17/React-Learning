import React, { useEffect, useRef, useState } from "react";

const App = () => {
  // const [number, setNumber] = useState(0)

  const inputRef1 = useRef("null");
  const inputRef2 = useRef("null");
  const inputRef3 = useRef("null");

  useEffect(() => {
    console.log("rendering ");
  });

  function handlechange1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "skyblue";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handlechange2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "skyblue";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handlechange3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "skyblue";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }

  return (
    <div>
      <button onClick={handlechange1}>Click1</button>
      <input ref={inputRef1} />
      <button onClick={handlechange2}>Click2</button>
      <input ref={inputRef2} />
      <button onClick={handlechange3}>Click3</button>
      <input ref={inputRef3} />
    </div>
  );
};

export default App;
