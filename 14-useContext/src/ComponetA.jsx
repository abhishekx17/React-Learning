import React, { createContext, useState } from "react";
import ComponetB from "./ComponetB";

 export const UserContext = createContext();

const ComponetA = () => {
  const [user, setUser] = useState("Abhi");

  return (
    <div className="box">
      <h1>{`hi ${user}`}</h1>
      <UserContext.Provider value={user}>
        <ComponetB user={user} />
      </UserContext.Provider>
    </div>
  );
};

export default ComponetA;
