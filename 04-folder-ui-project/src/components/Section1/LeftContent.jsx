import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-6xl font-bold mb-7">
          Prospective <br /> <span className="text-gray-400">Customer</span> <br />
          segmentation
        </h3>
        <p className="text-xl font-medium text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing asperiores ea
          omnis doloremque tempora ipsam vero voluptatem minus?
        </p>
      </div>
      <div className="">
        <ArrowUpRight size={35} />
      </div>
    </div>
  );
};

export default LeftContent;
