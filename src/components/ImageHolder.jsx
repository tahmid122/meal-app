import React from "react";

const ImageHolder = ({ setImageTrue, imageTrue }) => {
  return (
    <div className="p-5 flex items-center justify-center">
      <div className="flex items-end gap-5">
        <img className="h-[200px] w-fit -z-10" src={imageTrue.image} alt="" />
        <span
          onClick={() => setImageTrue({ image: "", isTrue: false })}
          className="font-bold text-3xl cursor-pointer"
        >
          X
        </span>
      </div>
    </div>
  );
};

export default ImageHolder;
