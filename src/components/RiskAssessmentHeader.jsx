import React from 'react'

const RiskAssessmentHeader = () => {
  return (
    <header className="flex flex-col grow shrink-0 pr-4 pb-1.5 leading-none basis-0 w-fit max-md:max-w-full">
      <h2 className="self-start text-3xl font-bold text-neutral-800">
        AI-Based Risk Assessment
      </h2>
      <p className="mt-6 text-base text-neutral-600 max-md:max-w-full">
        Get deep insights into your business risks, buyer performance, and
        future projections — all powered by Solviser's intelligent AI.
      </p>
    </header>
  );
};

export default RiskAssessmentHeader;
