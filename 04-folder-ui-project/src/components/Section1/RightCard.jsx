import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0  overflow-hidden relative w-80 rounded-4xl">
      <img
        className="h-full w-full object-cover brightness-75 contrast-110 "
        src={props.img}
        alt=""
        
      />

      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
