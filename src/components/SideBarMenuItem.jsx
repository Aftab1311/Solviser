import React from "react";

function SidebarMenuItem({
  icon,
  text,
  active = false,
  hasDropdown = false,
  dropdownOpen = true,
}) {
  return (
    <div
      className={`flex gap-2.5 items-center mt-2.5 w-full ${active ? "text-white" : "text-neutral-800"}`}
    >
      <div
        className={`flex shrink-0 self-stretch my-auto ${active ? "bg-red-500" : ""} rounded-none h-[54px] w-[9px]`}
      />
      <div
        className={`flex flex-col justify-center self-stretch py-4 pr-2.5 pl-4 my-auto ${active ? "bg-red-500" : ""} rounded-none min-w-60 w-[293px]`}
      >
        <div className="flex gap-10 justify-between items-start w-full">
          <div className="flex gap-2 items-center">
            <img
              src={icon}
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt={`${text} icon`}
            />
            <span className="self-stretch my-auto">{text}</span>
          </div>
          {hasDropdown && (
            <img
              src={dropdownOpen ? "https://cdn.builder.io/api/v1/image/assets/TEMP/7aa82b1662d149286c26fe1f07a242d311815637?placeholderIfAbsent=true&apiKey=e4226e5af642463c93547f5f38565ee6" : "https://cdn.builder.io/api/v1/image/assets/TEMP/c26575b356aa7536143f0b7b4c83d7a56cdc2a33?placeholderIfAbsent=true&apiKey=e4226e5af642463c93547f5f38565ee6"}
              className={`object-contain shrink-0 w-6 aspect-square ${!dropdownOpen ? "rotate-[-3.141592653589793rad]" : ""}`}
              alt="Dropdown arrow"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarMenuItem;
