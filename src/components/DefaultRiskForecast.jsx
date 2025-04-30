"use client";
import React from "react";
import RiskCard from "./RiskCard";
import InsightBox from "./InsightBox";

const DefaultRiskForecast = () => {
  return (
    <section className="flex flex-col gap-6 p-6 mx-auto my-0 w-full bg-white rounded-lg max-w-[1376px] shadow-[0px_2px_4px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <header className="flex gap-2 items-center max-sm:flex-col max-sm:items-start">
        <svg
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_7_35600)">
            <path
              d="M11.875 9.875V1.14844C11.875 0.796875 12.1484 0.5 12.5 0.5C17.332 0.5 21.25 4.41797 21.25 9.25C21.25 9.60156 20.9531 9.875 20.6016 9.875H11.875ZM1.25 11.125C1.25 6.38672 4.76953 2.46484 9.33594 1.83984C9.69531 1.78906 10 2.07812 10 2.44141V11.75L16.1133 17.8633C16.375 18.125 16.3555 18.5547 16.0547 18.7656C14.5234 19.8594 12.6484 20.5 10.625 20.5C5.44922 20.5 1.25 16.3047 1.25 11.125ZM21.8125 11.75C22.1758 11.75 22.4609 12.0547 22.4141 12.4141C22.1133 14.5977 21.0625 16.5391 19.5273 17.9727C19.293 18.1914 18.9258 18.1758 18.6992 17.9453L12.5 11.75H21.8125Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_7_35600">
              <path d="M0 0.5H22.5V20.5H0V0.5Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="text-xl font-bold text-neutral-800">
          Chances of Default (Forecast)
        </h1>
      </header>

      <div className="flex gap-6 justify-between items-start max-md:flex-col max-md:gap-8 max-md:items-center max-sm:flex-col max-sm:gap-4 max-sm:items-center">
        <RiskCard
          period="3"
          riskPercentage={3.5}
          riskLevel="low"
          strokeColor="#4ADE80"
          strokeDasharray="18.67 533.33"
        />
        <RiskCard
          period="6"
          riskPercentage={5.8}
          riskLevel="moderate"
          strokeColor="#F97316"
          strokeDasharray="30.93 533.33"
        />
      </div>

      <InsightBox />
    </section>
  );
};

export default DefaultRiskForecast;
