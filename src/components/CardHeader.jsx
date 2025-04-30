import React from "react";

const CardHeader = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between py-0.5 w-full bg-opacity-0 max-md:max-w-full">
      <div className="flex gap-2 self-start">
        <figure className="flex overflow-hidden justify-center items-center self-start min-h-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da1d4a41e71ff093c4a81cf0d4164c9662bad14f?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
            alt="AI Prediction Icon"
            className="object-contain self-stretch my-auto aspect-[1.25] w-[25px]"
          />
        </figure>
        <h1 className="flex-auto text-xl font-semibold leading-none text-neutral-800">
          AI Prediction (Next 3 Months)
        </h1>
      </div>
      <span className="px-2 py-1.5 text-xs text-blue-800 bg-blue-100 rounded-full">
        AI Powered
      </span>
    </header>
  );
};

export default CardHeader;
