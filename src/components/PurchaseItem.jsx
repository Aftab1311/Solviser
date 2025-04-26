import React from "react";

function PurchaseItem({ productName, category, date, price, status }) {
  const statusClasses =
    status === "Paid"
      ? "text-green-700 bg-green-100"
      : "text-neutral-500 bg-gray-200";

  return (
    <article className="flex relative flex-col p-4 mt-5 w-full bg-white max-md:max-w-full first:mt-0">
      <div className="z-0 w-full max-md:max-w-full">
        <div className="pb-2.5 w-full border-b border-red-500 border-opacity-20 max-md:max-w-full">
          <div className="flex flex-wrap gap-2.5 items-start w-full max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/602c9b740cb9e4c326c35a2badf7560a187569c8?placeholderIfAbsent=true"
              alt={productName}
              className="object-contain shrink-0 aspect-square w-[58px]"
            />
            <div className="flex flex-1 shrink justify-between items-start basis-0 min-w-60 max-md:max-w-full">
              <div className="flex flex-col justify-center min-w-60 w-[381px]">
                <h3 className="self-start text-xl font-bold text-center text-neutral-800">
                  {productName}
                </h3>
                <p className="mt-2 text-base leading-none text-red-500">
                  {category}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="gap-3.5 self-stretch mt-3.5 w-full text-lg font-bold text-neutral-800 max-md:max-w-full">
          {date} | {price}
        </p>
      </div>
      <div
        className={`absolute top-2/4 z-0 gap-2.5 self-start px-6 py-1.5 text-xs font-bold text-center whitespace-nowrap -translate-y-2/4 h-[25px] min-h-[25px] right-[15px] rounded-[50px] translate-x-[0%] max-md:px-5 ${statusClasses}`}
      >
        {status}
      </div>
    </article>
  );
}

export default PurchaseItem;
