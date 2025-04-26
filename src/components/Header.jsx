"use client";
import React from "react";

function Header() {
  return (
    <header className="flex overflow-hidden flex-col justify-center self-stretch px-7 py-4 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <SearchBar />
        <UserProfile />
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <div className="flex gap-0 justify-center items-center self-stretch my-auto text-base text-center min-w-60 text-zinc-600 w-[461px] max-md:max-w-full">
      <div className="flex gap-2.5 items-center self-stretch px-6 py-4 my-auto bg-stone-50 min-h-[54px] min-w-60 w-[461px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2f2e1a3c62fc645e61682d4f1b73e92a9a84ac5?placeholderIfAbsent=true"
          alt="Search icon"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="self-stretch my-auto">Search here...</span>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="flex gap-2.5 items-center self-stretch my-auto min-w-60">
      <div className="self-stretch my-auto w-[60px]">
        <div className="flex flex-col items-center px-1.5 pt-5 pb-8 bg-rose-100 rounded-full fill-rose-100 h-[60px] w-[60px]">
          <div className="flex shrink-0 w-2.5 h-2.5 bg-red-500 rounded-full fill-red-500" />
        </div>
      </div>
      <div className="flex gap-2 items-center self-stretch my-auto text-base font-bold text-neutral-800">
        <div className="flex gap-3.5 items-center self-stretch my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc77db8d7b3d9378f771bb3758090ce4cb28e38?placeholderIfAbsent=true"
            alt="User profile"
            className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[70px] w-[60px]"
          />
          <span className="self-stretch my-auto w-[90px]">Adam Storm</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/647ac43a0ba52788362ecfb95cd0adb5c69e5827?placeholderIfAbsent=true"
          alt="Dropdown"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
    </div>
  );
}

export default Header;
