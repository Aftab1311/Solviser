"use client";
import React from "react";

function DefaultsAndDisputes() {
  return (
    <div className="flex flex-col justify-center p-6 bg-white rounded-lg border-0 border border-solid shadow-md max-w-[676px] max-md:px-5">
      <div className="flex flex-wrap gap-2 py-1 w-full">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/512da1992e90eda1b61941b444006c8aad404e58?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
            className="object-contain self-stretch my-auto aspect-[0.9] w-[18px]"
            alt="Defaults icon"
          />
        </div>
        <div className="flex-auto text-xl font-semibold text-neutral-800 w-[598px] max-md:max-w-full">
          Defaults & Disputes
        </div>
      </div>
      <div className="mt-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1 grow shrink-0 py-px basis-0 w-fit">
            <div className="self-start text-base font-medium leading-none text-gray-500">
              Defaults (Last 3 Months)
            </div>
            <div className="flex gap-2 py-1 pr-16 mt-4 max-md:pr-5">
              <div className="text-2xl font-bold leading-none text-gray-800">
                ₹ 12,50,000
              </div>
              <div className="flex gap-1 self-start mt-2.5">
                <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5554660151d1d3fd16e218a38c7cd9f882099c70?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                    className="object-contain self-stretch my-auto aspect-[0.79] w-[11px]"
                    alt="Trend indicator"
                  />
                </div>
                <div className="text-sm leading-none text-red-500">5%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 grow shrink-0 py-px basis-0 w-fit">
            <div className="self-start text-base font-medium leading-none text-gray-500">
              Defaults (Expected Next 3 Months)
            </div>
            <div className="flex gap-2 py-1 pr-16 mt-3.5 max-md:pr-5">
              <div className="text-2xl font-bold leading-none text-gray-800">
                ₹ 10,75,000
              </div>
              <div className="flex gap-1 self-start mt-2.5">
                <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b53d32f5f38717c37ec5efce0a12ffdc035c72eb?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                    className="object-contain self-stretch my-auto w-2.5 aspect-[0.71]"
                    alt="Trend indicator"
                  />
                </div>
                <div className="text-sm leading-none text-emerald-500">6%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex flex-col flex-1 grow shrink-0 py-px basis-0 w-fit">
            <div className="self-start text-base font-medium leading-none text-gray-500">
              Disputes (Last 3 Months)
            </div>
            <div className="flex gap-2.5 py-1 pr-16 mt-3.5 max-md:pr-5">
              <div className="text-2xl font-bold leading-none text-gray-800">
                22 Cases
              </div>
              <div className="flex gap-1 self-start mt-2.5">
                <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff919fb992d227008ff1c7ed47a79819105feb6e?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                    className="object-contain self-stretch my-auto w-2.5 aspect-[0.71]"
                    alt="Trend indicator"
                  />
                </div>
                <div className="text-sm leading-none text-red-500">10%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 grow shrink-0 py-px basis-0 w-fit">
            <div className="self-start text-base font-medium leading-none text-gray-500">
              Disputes (Expected Next 3 Months)
            </div>
            <div className="flex gap-2 py-1 pr-16 mt-3.5 max-md:pr-5">
              <div className="text-2xl font-bold leading-none text-gray-800">
                17 Cases
              </div>
              <div className="flex gap-1 self-start mt-2.5">
                <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e222ea4bce7547c1c08356e8d0e9d768687f47f?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                    className="object-contain self-stretch my-auto w-2.5 aspect-[0.71]"
                    alt="Trend indicator"
                  />
                </div>
                <div className="text-sm leading-none text-emerald-500">8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultsAndDisputes;
