
import React, { useState } from "react";

const ComparisonToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <button
      onClick={() => setIsEnabled(!isEnabled)}
      className="flex justify-end items-center p-1 w-12 h-6 bg-gray-200 rounded-full"
      role="switch"
      aria-checked={isEnabled}
    >
      <div className="w-4 h-4 bg-red-500 rounded-full transition-transform duration-200 ease-in-out" />
    </button>
  );
};

export default ComparisonToggle;
