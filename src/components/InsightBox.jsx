import React from "react";
const InsightBox = () => {
  return (
    <aside className="flex gap-4 items-center p-4 bg-blue-50 rounded-lg max-sm:flex-col max-sm:items-start">
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5 18H0V0H13.5V18Z" stroke="#E5E7EB" />
        <path
          d="M9.5625 13.5C9.9 12.3785 10.5996 11.4223 11.2922 10.4695C11.475 10.2199 11.6578 9.97031 11.8336 9.71719C12.5297 8.71523 12.9375 7.50234 12.9375 6.19102C12.9375 2.77031 10.1672 0 6.75 0C3.33281 0 0.5625 2.77031 0.5625 6.1875C0.5625 7.49883 0.970313 8.71523 1.66641 9.71367C1.84219 9.9668 2.025 10.2164 2.20781 10.466C2.90391 11.4188 3.60352 12.3785 3.9375 13.4965H9.5625V13.5ZM6.75 18C8.30391 18 9.5625 16.7414 9.5625 15.1875V14.625H3.9375V15.1875C3.9375 16.7414 5.19609 18 6.75 18ZM3.9375 6.1875C3.9375 6.49687 3.68438 6.75 3.375 6.75C3.06562 6.75 2.8125 6.49687 2.8125 6.1875C2.8125 4.01133 4.57383 2.25 6.75 2.25C7.05937 2.25 7.3125 2.50312 7.3125 2.8125C7.3125 3.12188 7.05937 3.375 6.75 3.375C5.19609 3.375 3.9375 4.63359 3.9375 6.1875Z"
          fill="black"
        />
      </svg>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium text-blue-800">AI Insight:</h3>
        <p className="text-base text-blue-700">
          Your default risk is increasing over time. Consider implementing
          stricter payment terms with new buyers and requesting advance payments
          from medium-risk customers to reduce potential defaults.
        </p>
      </div>
    </aside>
  );
};

export default InsightBox;
