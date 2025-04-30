import React from "react";

const ActionButton = ({ icon: Icon, text, variant = "red" }) => {
  const baseClasses =
    "flex gap-2 justify-center items-center p-4 h-14 text-base text-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] w-[326px] max-md:w-full max-sm:p-3 max-sm:text-sm";

  const variantClasses = {
    red: "bg-red-500",
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      type="button"
    >
      <span className="text-white">
        <Icon />
      </span>
      <span>{text}</span>
    </button>
  );
};

export default ActionButton;
