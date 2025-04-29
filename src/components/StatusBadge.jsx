import React from "react";

function StatusBadge({ status }) {
  let bgColor = "";
  let textColor = "";

  switch (status) {
    case "Completed":
      bgColor = "bg-green-100";
      textColor = "text-green-700";
      break;
    case "Pending":
      bgColor = "bg-gray-200";
      textColor = "text-neutral-500";
      break;
    case "Overdue":
      bgColor = "bg-rose-50";
      textColor = "text-red-500";
      break;
    default:
      bgColor = "bg-gray-200";
      textColor = "text-neutral-500";
  }

  return (
    <div
      className={`gap-2.5 self-stretch px-6 py-1.5 my-auto ${bgColor} ${textColor} min-h-[25px] rounded-[50px] max-md:px-5`}
    >
      {status}
    </div>
  );
}

export default StatusBadge;
