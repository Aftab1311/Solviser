
import React from "react";
import ScoreCircle from "./ScoreCircle";
import StatusIndicator from "./StatusIndicator";
import IndustryIcon from "./IndustryIcon";
import PerformanceIndicator from "./PerformanceIndicator";
import ComparisonToggle from "./ComparisonToggle";

const RiskScoreWidget = () => {
  return (
    <section className="flex flex-col gap-4 justify-center items-start p-6   bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)]  max-md:p-5 w-full ">
      <header className="flex justify-between items-center w-full">
        <h2 className="text-xl font-bold text-neutral-800 max-md:text-lg max-sm:text-base">
          Overall Risk Score
        </h2>
        <div className="flex gap-2.5 items-center text-sm text-gray-500 max-md:text-sm max-sm:text-xs">
          <span>Compare with Industry</span>
          <ComparisonToggle />
        </div>
      </header>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-40 h-40">
            <ScoreCircle percentage={78} />
            <div className="flex absolute left-11 gap-1 items-baseline top-[58px]">
              <span className="text-4xl font-bold text-emerald-500 max-md:text-4xl max-sm:text-3xl">
                78
              </span>
              <span className="text-sm text-gray-500 max-md:text-sm max-sm:text-xs">
                /100
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-lg font-medium text-gray-800 max-md:text-lg max-sm:text-base">
            <StatusIndicator />
            <span>Healthy</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span>Industry Average Score:</span>
            <div className="flex gap-2 items-center text-xl font-bold text-gray-800 max-md:text-xl max-sm:text-lg">
              <IndustryIcon />
              <span>82/100</span>
            </div>
            <span className="text-xs text-gray-400 max-md:text-xs max-sm:text-xs">
              (for your sector)
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span>Last 3 Months Performance:</span>
            <div className="flex gap-1 items-center text-base font-bold text-emerald-500 max-md:text-base max-sm:text-sm">
              <PerformanceIndicator />
              <span>+8% Improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskScoreWidget;
