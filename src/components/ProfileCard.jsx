import React from "react";

function ProfileCard() {
  return (
    <article className="px-4 py-3.5 mt-8 w-full bg-white max-md:max-w-full">
      <div className="flex flex-wrap gap-3 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bdeac574b5b0c38a2ccbc377cdb224c3763a0b9?placeholderIfAbsent=true"
          alt="Company logo"
          className="object-contain shrink-0 max-w-full aspect-square w-[103px]"
        />
        <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
          <div className="flex flex-wrap gap-10 max-md:max-w-full">
            <div className="flex relative flex-col flex-1 items-start">
              <div className="z-0 max-w-full w-[122px]">
                <h2 className="text-lg font-bold text-neutral-800">
                  ABC Supplies
                </h2>
                <p className="mt-1 text-sm text-zinc-600">ABC Corporation</p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4e05b1347e9c89920687fc236761c0d50fcd1c?placeholderIfAbsent=true"
                alt="Verified"
                className="object-contain absolute z-0 aspect-square h-[18px] right-[52px] top-[3px] w-[18px]"
              />
            </div>
            <div className="flex flex-col flex-1 justify-center items-center self-start px-4 py-2.5 text-base font-bold text-white bg-lime-600">
              <div className="flex gap-2.5 items-center max-w-full w-[153px]">
                <div className="flex shrink-0 self-stretch my-auto w-5 h-5" />
                <span className="self-stretch my-auto">Credit Score: 500</span>
              </div>
            </div>
          </div>
          <p className="self-start mt-10 ml-20 text-sm font-medium text-center text-white max-md:ml-2.5">
            25%
          </p>
        </div>
      </div>
      <hr className="shrink-0 mt-5 h-px bg-red-200 border border-red-200 border-solid max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between mt-4 w-full max-md:max-w-full">
        <div className="flex gap-5 items-center my-auto text-lg text-neutral-800">
          <div className="flex gap-2.5 items-start self-stretch my-auto">
            <div className="flex shrink-0 w-6 h-6" />
            <span>New York, NY</span>
          </div>
          <div className="flex gap-2.5 items-start self-stretch my-auto">
            <div className="flex shrink-0 w-6 h-6" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
        <button className="flex gap-2.5 justify-center items-center px-8 py-2.5 text-xs font-bold text-center text-white bg-red-500 max-md:px-5">
          <div className="flex gap-1.5 items-center self-stretch my-auto">
            <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
            <span className="self-stretch my-auto">Contact Supplier</span>
          </div>
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;
