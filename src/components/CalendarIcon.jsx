import React from "react";

const CalendarIcon = ({ isEndDate = false }) => {
  // The two calendar icons are slightly different, so we conditionally render the correct one
  if (isEndDate) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        style={{ width: "16px", height: "16px" }}
      >
        <g clipPath="url(#clip0_2504_4674)">
          <path
            d="M5.09082 0.727539V2.90936"
            stroke="#F05134"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.9092 0.727539V2.90936"
            stroke="#F05134"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.81836 5.88379H14.182"
            stroke="#F05134"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5455 5.45472V11.6365C14.5455 13.8184 13.4546 15.2729 10.9091 15.2729H5.09095C2.5455 15.2729 1.45459 13.8184 1.45459 11.6365V5.45472C1.45459 3.2729 2.5455 1.81836 5.09095 1.81836H10.9091C13.4546 1.81836 14.5455 3.2729 14.5455 5.45472Z"
            stroke="#F05134"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6873 9.23668H10.6938"
            stroke="#F05134"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6873 11.4183H10.6938"
            stroke="#F05134"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99685 9.23668H8.00338"
            stroke="#F05134"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99685 11.4183H8.00338"
            stroke="#F05134"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.30495 9.23668H5.31149"
            stroke="#F05134"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.30495 11.4183H5.31149"
            stroke="#F05134"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2504_4674">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
      style={{ width: "16px", height: "16px" }}
    >
      <path
        d="M5.59082 0.727539V2.90936"
        stroke="#F05134"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4092 0.727539V2.90936"
        stroke="#F05134"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.31836 5.88379H14.682"
        stroke="#F05134"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0455 5.45472V11.6365C15.0455 13.8184 13.9546 15.2729 11.4091 15.2729H5.59095C3.0455 15.2729 1.95459 13.8184 1.95459 11.6365V5.45472C1.95459 3.2729 3.0455 1.81836 5.59095 1.81836H11.4091C13.9546 1.81836 15.0455 3.2729 15.0455 5.45472Z"
        stroke="#F05134"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1873 9.23668H11.1938"
        stroke="#F05134"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1873 11.4183H11.1938"
        stroke="#F05134"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.49685 9.23668H8.50338"
        stroke="#F05134"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.49685 11.4183H8.50338"
        stroke="#F05134"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.80495 9.23668H5.81149"
        stroke="#F05134"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.80495 11.4183H5.81149"
        stroke="#F05134"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarIcon;
