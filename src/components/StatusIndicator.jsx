import React from "react";
const StatusIndicator = () => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="status-icon"
    >
      <g clipPath="url(#clip0_status)">
        <path
          d="M6.89062 12C8.48192 12 10.008 11.3679 11.1333 10.2426C12.2585 9.11742 12.8906 7.5913 12.8906 6C12.8906 4.4087 12.2585 2.88258 11.1333 1.75736C10.008 0.632141 8.48192 0 6.89062 0C5.29933 0 3.7732 0.632141 2.64798 1.75736C1.52277 2.88258 0.890625 4.4087 0.890625 6C0.890625 7.5913 1.52277 9.11742 2.64798 10.2426C3.7732 11.3679 5.29933 12 6.89062 12Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_status">
          <path d="M0.890625 0H12.8906V12H0.890625V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StatusIndicator;
