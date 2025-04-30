"use client";

import * as React from "react";

function FinancialFigures() {
  return (
    <div className="px-6 pt-6 pb-24 bg-white rounded-lg border-0 border border-solid shadow-md max-w-[676px] max-md:px-5">
      <div className="flex flex-wrap gap-2 py-1 w-full max-md:max-w-full">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7f51da9e9537ca36028b542947cf7683d650ea1?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
            className="object-contain self-stretch my-auto aspect-[1.15] w-[23px]"
          />
        </div>
        <div className="flex-auto text-xl font-semibold text-neutral-800 w-[592px] max-md:max-w-full">
          Financial Figures (₹ INR)
        </div>
      </div>
      <div className="mt-4 w-full max-md:max-w-full">
        <div className="max-md:max-w-full" space={24}>
          <div className="flex gap-5 max-md:flex-col max-md:">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="p-4 mx-auto w-full bg-gray-50 rounded-lg max-md:mt-6">
                <div className="py-1.5 text-base font-medium text-gray-500 max-md:pr-5">
                  Open Contracts
                </div>
                <div className="pt-px pb-2.5 mt-2 text-2xl font-bold leading-none text-gray-800 max-md:pr-5">
                  ₹ 1,87,50,000
                </div>
                <div className="pt-px pb-2 mt-1 text-sm text-gray-500 max-md:pr-5">
                  42 Active Contracts
                </div>
                <div className="flex gap-2.5 px-0.5 py-1 mt-2">
                  <div className="flex gap-1">
                    <div className="flex overflow-hidden justify-center items-center self-start min-h-3">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eae9618620b0a2012dae8aa2e766bf42866868ad?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                        className="object-contain self-stretch my-auto w-3 aspect-square"
                      />
                    </div>
                    <div className="text-sm leading-none text-gray-800">
                      Low Risk: 28
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex overflow-hidden justify-center items-center self-start min-h-3">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05ae777300a309022818f71b23fdd02d33961b8?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                        className="object-contain self-stretch my-auto w-3 aspect-square"
                      />
                    </div>
                    <div className="text-sm leading-none text-gray-800">
                      Medium: 10
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex overflow-hidden justify-center items-center self-start min-h-3">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9355eff38a095b30ead42482a5e17ec2191f5a2c?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                        className="object-contain self-stretch my-auto w-3 aspect-square"
                      />
                    </div>
                    <div className="text-sm leading-none text-gray-800">
                      High: 4
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="p-4 mx-auto w-full bg-gray-50 rounded-lg max-md:mt-6">
                <div className="pt-0.5 pb-2.5 text-base font-medium text-gray-500 max-md:pr-5">
                  Closed Contracts
                </div>
                <div className="pt-px pb-2.5 mt-2 text-2xl font-bold leading-none text-gray-800 max-md:pr-5">
                  ₹ 3,95,00,000
                </div>
                <div className="py-1 mt-1 text-sm text-gray-500 max-md:pr-5">
                  Completed 67 Contracts
                </div>
                <div className="flex gap-10 px-px py-1 mt-2 w-full">
                  <div className="flex flex-1 gap-1">
                    <div className="flex overflow-hidden justify-center items-center self-start min-h-3">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0898efe0831cd458ff9a7c46f9b74194b8369f42?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                        className="object-contain self-stretch my-auto w-3 aspect-square"
                      />
                    </div>
                    <div className="text-sm leading-none text-gray-800">
                      On Time: 52
                    </div>
                  </div>
                  <div className="flex flex-1 gap-1">
                    <div className="flex overflow-hidden justify-center items-center self-start min-h-3">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5113b6fa8b290200c7a4c2c3ea4b9366d6439908?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                        className="object-contain self-stretch my-auto w-3 aspect-square"
                      />
                    </div>
                    <div className="text-sm leading-none text-gray-800">
                      Delayed: 15
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 mt-6 w-full bg-red-50 rounded-lg max-md:max-w-full">
          <div className="pt-0.5 pb-2.5 text-base font-medium text-red-700 max-md:pr-5 max-md:max-w-full">
            Defaulted Contracts
          </div>
          <div className="flex flex-wrap gap-2.5 pt-px pb-2 mt-2 leading-none text-gray-800">
            <div className="text-2xl font-bold">₹ 27,25,000</div>
            <div className="flex-auto text-sm w-[422px] max-md:max-w-full">
              (5 Contracts)
            </div>
          </div>
          <div className="flex flex-wrap gap-10 p-0.5 mt-2 w-full max-md:max-w-full">
            <div className="flex flex-1 gap-1">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65829985c67029d25ee2625493abff0400c054e?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                  className="object-contain self-stretch my-auto w-3.5 aspect-square"
                />
              </div>
              <div className="text-sm leading-none text-gray-800 basis-auto">
                Legal Action Initiated: 2
              </div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bcecfc117135c2fdebec064d2b759fc45eed3a?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
                  className="object-contain self-stretch my-auto w-3.5 aspect-square"
                />
              </div>
              <div className="text-sm leading-none text-gray-800 basis-auto">
                Dispute Resolution: 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialFigures;
