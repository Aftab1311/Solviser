import React from "react";

const RiskScoreDisplay = () => {
  return (
    <section className="grow pb-3 w-full  bg-opacity-0 max-md:mt-10">
      <div className="w-40 h-40  bg-opacity-0 max-md:mr-2 max-md:ml-2.5">
        <div className="flex justify-center items-center min-h-40">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d3b1743a11cffaf6626b4c51afd8d9cadc22c2?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
            alt="Risk Score Circle"
            className="object-contain self-stretch my-auto w-40 aspect-square"
          />
        </div>
        <div className="flex z-10 gap-px items-start px-4 py-16 -mt-40 w-40 h-40 leading-none whitespace-nowrap  bg-opacity-0 max-md:px-5">
          <strong className="text-4xl font-bold text-orange-500">65</strong>
          <span className="mt-3.5 text-sm text-gray-500">/100</span>
        </div>
      </div>
      <h2 className="mt-3 text-lg font-medium leading-none text-gray-800">
        Predicted Risk Score
      </h2>
    </section>
  );
};

export default RiskScoreDisplay;
