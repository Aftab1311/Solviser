import React from "react";

function Sidebar() {
  return (
    <nav className="overflow-hidden grow pt-28 w-full text-base font-bold text-center bg-rose-100 pb-[768px] text-neutral-800 max-md:py-24">
      <div className="w-full">
        <SidebarItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/451f81101ff715f8dc3c52e7a154037d4e10d49a?placeholderIfAbsent=true"
          text="My Dashboard"
        />
        <SidebarItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fb2bdb34a39c3ab0262228d204fe05840611c6ad?placeholderIfAbsent=true"
          text="AI-Based Risk Analysis"
          hasDropdown={true}
        />
        <SidebarItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f79560cb1c98742b0f3cecd374cae4477e91c9?placeholderIfAbsent=true"
          text="Smart Contract"
          hasDropdown={true}
        />
        <SidebarItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4d956ea3e322af213455d0472dc60477d519344e?placeholderIfAbsent=true"
          text="Centralized Buyers Blocklist"
          isExpanded={true}
        />
        <SidebarItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7875f554cbd3097fe27ec4d702a35bfc9dc94845?placeholderIfAbsent=true"
          text="Specific Suppliers Network"
          hasDropdown={true}
        />
        <SidebarItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/788a5976017a41d022ea88dea8c1457f167d28e5?placeholderIfAbsent=true"
          text="ERP Solution"
          hasDropdown={true}
        />
        <SidebarItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/543e94b78f420cda6466229821b5dd0b02765b72?placeholderIfAbsent=true"
          text="E-Commerce Page"
          hasDropdown={true}
        />
        <SidebarItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6c0a05ca4ce8ae5a8e5e69103922806b2187e6b1?placeholderIfAbsent=true"
          text="Legal & Financial Services"
        />
      </div>
    </nav>
  );
}

function SidebarItem({ icon, text, hasDropdown = false, isExpanded = false }) {
  return (
    <div className="flex gap-2.5 items-center mt-2.5 w-full first:mt-0">
      <div className="flex shrink-0 self-stretch my-auto rounded-none h-[54px] w-[9px]" />
      <div className="flex flex-col justify-center self-stretch py-4 pr-2.5 pl-4 my-auto rounded-none min-w-60 w-[293px]">
        <div className="flex gap-10 justify-between items-start w-full">
          <div className="flex gap-2 items-center">
            <img
              src={icon}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="self-stretch my-auto">{text}</span>
          </div>
          {hasDropdown && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c26575b356aa7536143f0b7b4c83d7a56cdc2a33?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
          )}
          {isExpanded && (
            <div className="flex shrink-0 self-stretch my-auto w-6 h-6 rotate-[-3.141592653589793rad]" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
