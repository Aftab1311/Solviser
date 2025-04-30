import React from "react";
import ProgressBar from "./ProgressBar";
import { IconArrowUp, IconArrowDown } from "./Icons.jsx";

const DelayMetric = ({ title, value, trend, trendValue, trendType }) => {
  const TrendIcon = trendType === "increase" ? IconArrowUp : IconArrowDown;
  const trendColor =
    trendType === "increase" ? "text-red-500" : "text-emerald-500";

  return (
    <section className="w-full">
      <h3 className="text-base font-medium text-gray-500">{title}</h3>
      <div className="flex gap-2 items-center mt-2">
        <span className="text-2xl font-bold text-gray-800">{value} Days</span>
        <div className="flex gap-1 items-center">
          <TrendIcon />
          <span className={`text-sm ${trendColor}`}>{trendValue}</span>
        </div>
      </div>
      <ProgressBar value={45} />
    </section>
  );
};

export default DelayMetric;
