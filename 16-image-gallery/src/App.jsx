import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index + 1}&limit=12`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <p className="text-gray-400 text-lg mt-6">Loading.....</p>
  );
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div
          key={idx}
          className="transform hover:scale-[1.03] transition-all duration-300"
        >
          <Cards elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-linear-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white flex flex-col items-center p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-8 tracking-wide drop-shadow-md">
        Random Picsum Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-10">
        {printUserData}
      </div>

      <div className="flex gap-6 mt-auto">
        <button
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="px-6 py-2 rounded-lg bg-amber-500 text-black font-semibold shadow-md hover:bg-amber-400 hover:scale-105 transition-all duration-300 disabled:opacity-50"
          disabled={index <= 1}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="px-6 py-2 rounded-lg bg-amber-500 text-black font-semibold shadow-md hover:bg-amber-400 hover:scale-105 transition-all duration-300"
        >
          Next
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-4">Page: {index}</p>
    </div>
  );
};

export default App;
