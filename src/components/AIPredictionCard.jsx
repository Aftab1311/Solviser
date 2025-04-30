
import React from "react";
import CardHeader from "./CardHeader";
import RiskScoreDisplay from "./RiskScoreDisplay";
import PerformanceTrend from "./PerformanceTrend";
import AlertMessage from "./AlertMessage";
const AIPredictionCard = () => {
  return (
    <article className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-md w-full max-md:px-5">
      <CardHeader />

      <section className="mt-4  bg-opacity-0 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[46%] max-md:ml-0 max-md:w-full">
            <RiskScoreDisplay />
          </div>

          <div className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch m-auto w-full bg-opacity-0 max-md:mt-10">
              <PerformanceTrend />
              <AlertMessage />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AIPredictionCard;
