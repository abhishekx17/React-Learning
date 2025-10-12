import React from "react";

const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
      <img src={props.img} />
      <h1>{props.user}</h1>
      <h1>{props.age}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        ipsum.
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
