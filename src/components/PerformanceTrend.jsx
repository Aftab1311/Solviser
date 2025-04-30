import React from "react";

const PerformanceTrend = () => {
  return (
    <section className="flex flex-col py-px w-full  bg-opacity-0">
      <h3 className="self-start text-sm leading-none text-gray-500">
        Performance Trend:
      </h3>

      <div className="flex gap-1 py-1 mt-3 w-full  bg-opacity-0">
        <figure className="flex overflow-hidden justify-center items-center self-start min-h-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/688192cd2d6e3e3f771109afcb1017b1c9fcd591?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
            alt="Upward trend"
            className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
          />
        </figure>
        <p className="grow shrink w-48 text-xs leading-none text-black">
          <span className="text-base text-gray-800">Last 3 Months:</span>
          <span className="font-semibold text-base text-emerald-500"> +8%</span>
        </p>
      </div>

      <div className="flex gap-1 py-1 mt-1 w-full  bg-opacity-0">
        <figure className="flex overflow-hidden justify-center items-center self-start min-h-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2573ba258b300c07463b11bd588f51afbd202194?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
            alt="Downward trend"
            className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
          />
        </figure>
        <p className="grow shrink w-48 text-xs leading-none text-black">
          <span className="text-base text-gray-800">Next 3 Months:</span>
          <span className="font-semibold text-base text-red-500"> -5%</span>
        </p>
      </div>
    </section>
  );
};

export default PerformanceTrend;
