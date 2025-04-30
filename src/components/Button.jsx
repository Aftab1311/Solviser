import React from "react";
const Button = ({ children, variant = "white", icon: Icon, ...props }) => {
  const baseStyles =
    "flex gap-2.5 justify-center px-4 py-3 rounded-lg border-0 border border-solid shadow-sm";
  const variants = {
    white: "bg-white text-neutral-600",
    red: "bg-red-500 text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {Icon && (
        <img
          src={Icon}
          className={`object-contain shrink-0 self-start ${variant === "white" ? "w-3.5 aspect-[0.87]" : "w-4 aspect-square"}`}
          alt=""
        />
      )}
      <span className="basis-auto">{children}</span>
    </button>
  );
};

export default Button;
