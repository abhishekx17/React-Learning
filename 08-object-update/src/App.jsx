import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "mustang",
  });

  const handleyear = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };
  const handlemake = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };
  const handlemodel = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div className="car-container">
      <h2>Favorite Car</h2>
      <p className="car-info">
        {car.year} {car.make} {car.model}
      </p>

      <div className="inputs">
        <input type="number" value={car.year} onChange={handleyear} />
        <input type="text" value={car.make} onChange={handlemake} />
        <input type="text" value={car.model} onChange={handlemodel} />
      </div>
    </div>
  );
};

export default App;
