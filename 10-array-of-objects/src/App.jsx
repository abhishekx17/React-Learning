import React, { useState } from "react";

const App = () => {
  const [cars, setCars] = useState([]);
  const [Caryear, setCarYear] = useState(new Date().getFullYear());
  const [Carmake, setCarMake] = useState("");
  const [Carmodel, setCarModel] = useState("");

  const handleAddCar = (e) => {
    const newCar = { year: Caryear, make: Carmake, model: Carmodel };

    setCars((c) => [...c, newCar]);

    setCarYear(Caryear);
    setCarMake("");
    setCarModel("");
  };

  const handleRemove = (index) => {
    setCars(cars.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <span>
              {car.year} {car.make} {car.model}
            </span>
            <button
              className="remove-button"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={Caryear}
        onChange={(e) => setCarYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Car Make"
        value={Carmake}
        onChange={(e) => setCarMake(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Car Model"
        value={Carmodel}
        onChange={(e) => setCarModel(e.target.value)}
      />
      <button className="add-button" onClick={handleAddCar}>
        Add Car
      </button>
    </div>
  );
};

export default App;
