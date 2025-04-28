import React from "react";

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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc77db8d7b3d9378f771bb3758090ce4cb28e38?placeholderIfAbsent=true&apiKey=e4226e5af642463c93547f5f38565ee6"
            className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[70px] w-[60px]"
            alt="User avatar"
          />
          <span className="self-stretch my-auto w-[90px]">Adam Storm</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/647ac43a0ba52788362ecfb95cd0adb5c69e5827?placeholderIfAbsent=true&apiKey=e4226e5af642463c93547f5f38565ee6"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Dropdown arrow"
        />
      </div>
    </div>
  );
}

export default UserProfile;
