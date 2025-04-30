import React from "react";
import { IconClock } from "./Icons";
import DelayMetric from "./DelayMetric";

const PaymentDelays = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <article className="flex flex-col gap-4 p-6 mx-auto max-w-none bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] w-full ">
        <header className="flex gap-2 items-center">
          <IconClock />
          <h2 className="text-xl font-semibold text-neutral-800">
            Payment Delays (Days)
          </h2>
        </header>

        <div className="flex gap-6">
          <DelayMetric
            title="Average Delay (Last 3 Months)"
            value="45"
            trendValue="12%"
            trendType="increase"
          />
          <DelayMetric
            title="Projected Delay (Next 3 Months)"
            value="38"
            trendValue="7 days"
            trendType="decrease"
          />
        </div>
      </article>
    </>
  );
};

export default PaymentDelays;
