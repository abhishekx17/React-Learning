import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full w-12 h-12 flex justify-center items-center text-xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p style={{ textShadow: "0 2px 5px rgba(0,0,0,0.6)" }} className="  text-xl leading-relaxed text-white mb-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe
          voluptate nihil ratione repudiandae enim.
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor: props.color}} className="text-white font-medium rounded-full px-8 py-2 ">
            {props.tag}
          </button>
          <button className="text-white font-medium rounded-full px-3 py-2 ">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
