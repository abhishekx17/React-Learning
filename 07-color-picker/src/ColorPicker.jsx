import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handlecolor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <div className="display-color" style={{ backgroundColor: color }}>
        <p>Selected Color:{color}</p>
      </div>
      <label>Select a color: </label>
      <input type="color" value={color} onChange={handlecolor} />
    </div>
  );
};

export default ColorPicker;
