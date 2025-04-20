import React from "react";

const HoverCard = () => {
  return (
    <div className="card flex gap-[5px] w-[210px] h-[254px] bg-transparent rounded-[4px] p-[0.4em] ">
      <p className="card-item">
        <span className="card-label *:!text-white">Hover Me</span>
      </p>
      <p className="card-item">
        <span className="card-label *:!text-white">Hover Me</span>
      </p>
      <p className="card-item">
        <span className="card-label *:!text-white">Hover Me</span>
      </p>
    </div>
  );
};

export default HoverCard;
