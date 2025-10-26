import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fruits, setFruits] = useState(["Apple", "Mango", "Banana"]);

  const handleFruit = () => {
    const newFruit = document.getElementById("add-fruit").value.trim();
    document.getElementById("add-fruit").value = "";

    if (newFruit !== "") {
      setFruits((f) => [...f, newFruit]);
    }
  };

  const handleRemoveFruit = (index) => {
    setFruits((f) => f.filter((_, i) => i !== index));
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleFruit();
    }
  };

  return (
    <div className="fruit-container">
      <h1>List of Fruits</h1>

      <ul className="fruit-list">
        {fruits.map((fruit, index) => (
          <li key={index} onDoubleClick={() => handleRemoveFruit(index)}>
            {fruit}
          </li>
        ))}
      </ul>

      <div className="actions">
        <input type="text" id="add-fruit" placeholder="Enter fruit name" onKeyDown={handleKey}/>
        <button onClick={handleFruit}>Add Fruit</button>
      </div>
    </div>
  );
};

export default App;
