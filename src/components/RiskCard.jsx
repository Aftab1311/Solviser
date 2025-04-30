"use client";
import React from "react";
import CircularProgress from "./CircularProgress";

const RiskCard = ({
  period,
  riskPercentage,
  riskLevel,
  strokeColor,
  strokeDasharray,
}) => {
  const getRiskStatusContent = () => {
    if (riskLevel === "low") {
      return {
        bgColor: "bg-emerald-50",
        icon: (
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_7_35615)">
              <path
                d="M8.65625 16C10.778 16 12.8128 15.1571 14.3131 13.6569C15.8134 12.1566 16.6562 10.1217 16.6562 8C16.6562 5.87827 15.8134 3.84344 14.3131 2.34315C12.8128 0.842855 10.778 0 8.65625 0C6.53452 0 4.49969 0.842855 2.9994 2.34315C1.4991 3.84344 0.65625 5.87827 0.65625 8C0.65625 10.1217 1.4991 12.1566 2.9994 13.6569C4.49969 15.1571 6.53452 16 8.65625 16ZM12.1875 6.53125L8.1875 10.5312C7.89375 10.825 7.41875 10.825 7.12813 10.5312L5.12813 8.53125C4.83438 8.2375 4.83438 7.7625 5.12813 7.47188C5.42188 7.18125 5.89687 7.17813 6.1875 7.47188L7.65625 8.94063L11.125 5.46875C11.4187 5.175 11.8938 5.175 12.1844 5.46875C12.475 5.7625 12.4781 6.2375 12.1844 6.52812L12.1875 6.53125Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_35615">
                <path d="M0.65625 0H16.6562V16H0.65625V0Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        text: "Low risk level",
      };
    }
    return {
      bgColor: "bg-amber-50",
      icon: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_7_35631)">
            <path
              d="M8.39062 16C10.5124 16 12.5472 15.1571 14.0475 13.6569C15.5478 12.1566 16.3906 10.1217 16.3906 8C16.3906 5.87827 15.5478 3.84344 14.0475 2.34315C12.5472 0.842855 10.5124 0 8.39062 0C6.26889 0 4.23406 0.842855 2.73377 2.34315C1.23348 3.84344 0.390625 5.87827 0.390625 8C0.390625 10.1217 1.23348 12.1566 2.73377 13.6569C4.23406 15.1571 6.26889 16 8.39062 16ZM8.39062 4C8.80625 4 9.14062 4.33437 9.14062 4.75V8.25C9.14062 8.66562 8.80625 9 8.39062 9C7.975 9 7.64062 8.66562 7.64062 8.25V4.75C7.64062 4.33437 7.975 4 8.39062 4ZM7.39062 11C7.39062 10.7348 7.49598 10.4804 7.68352 10.2929C7.87105 10.1054 8.12541 10 8.39062 10C8.65584 10 8.9102 10.1054 9.09773 10.2929C9.28527 10.4804 9.39062 10.7348 9.39062 11C9.39062 11.2652 9.28527 11.5196 9.09773 11.7071C8.9102 11.8946 8.65584 12 8.39062 12C8.12541 12 7.87105 11.8946 7.68352 11.7071C7.49598 11.5196 7.39062 11.2652 7.39062 11Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_7_35631">
              <path d="M0.390625 0H16.3906V16H0.390625V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Moderate risk level",
    };
  };

  const statusContent = getRiskStatusContent();

  return (
    <article className="flex flex-col gap-4 items-center w-52 max-md:w-full max-md:max-w-[300px] max-sm:w-full max-sm:max-w-full">
      <h2 className="text-base font-medium text-gray-500">
        Next {period} Months Default Risk
      </h2>
      <div className="flex relative justify-center items-center w-48 h-48">
        <CircularProgress
          strokeColor={strokeColor}
          strokeDasharray={strokeDasharray}
        />
        <span className="absolute text-3xl font-bold text-gray-800">
          {riskPercentage}%
        </span>
      </div>
      <div
        className={`flex gap-2 items-center p-2 ${statusContent.bgColor} rounded-md`}
      >
        {statusContent.icon}
        <span>{statusContent.text}</span>
      </div>
    </article>
  );
};

export default RiskCard;
