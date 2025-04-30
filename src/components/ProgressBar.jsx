import React from "react";
const ProgressBar = ({ value, max = 60 }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full">
      <div className="relative mt-4 h-4 bg-gray-200 rounded-full">
        <div
          className="absolute h-4 bg-red-500 rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={max}
        />
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>0 Days</span>
        <span>30 Days</span>
        <span>60 Days</span>
      </div>
    </div>
  );
};

export default ProgressBar;
