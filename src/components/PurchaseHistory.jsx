import React from "react";
import PurchaseItem from "./PurchaseItem";

function PurchaseHistory() {
  const purchases = [
    {
      id: 1,
      productName: "Product A",
      category: "Category",
      date: "22-05-2025",
      price: "$40.00",
      status: "Paid",
    },
    {
      id: 2,
      productName: "Product A",
      category: "Category",
      date: "22-05-2025",
      price: "$40.00",
      status: "Unpaid",
    },
    {
      id: 3,
      productName: "Product A",
      category: "Category",
      date: "22-05-2025",
      price: "$40.00",
      status: "Unpaid",
    },
  ];

  return (
    <section className="mt-8 w-full max-w-[1031px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full font-bold max-md:max-w-full">
        <h2 className="self-stretch my-auto text-2xl text-black">
          Purchase History
        </h2>
        <button className="flex flex-col justify-center items-center self-stretch px-3.5 py-4 my-auto text-sm whitespace-nowrap bg-white border border-solid border-neutral-300 border-opacity-70 min-h-[46px] text-neutral-800 w-[108px]">
          <div className="flex gap-2.5 justify-center items-center">
            <div className="flex gap-1.5 justify-center items-center self-stretch my-auto">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
              <span className="self-stretch my-auto">Filter</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccdfbae7c09eafc108c1e476980cf2a6eb6366ef?placeholderIfAbsent=true"
              alt="Filter dropdown"
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.16] stroke-[1.271px] stroke-neutral-800 w-[13px]"
            />
          </div>
        </button>
      </div>
      <div className="mt-5 w-full max-md:max-w-full">
        {purchases.map((purchase) => (
          <PurchaseItem
            key={purchase.id}
            productName={purchase.productName}
            category={purchase.category}
            date={purchase.date}
            price={purchase.price}
            status={purchase.status}
          />
        ))}
      </div>
    </section>
  );
}

export default PurchaseHistory;
