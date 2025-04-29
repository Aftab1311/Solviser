import React from "react";

function SearchBar() {
  return (
    <div className="flex gap-0 justify-center items-center self-stretch my-auto text-base text-center min-w-60 text-zinc-600 w-[461px] max-md:max-w-full">
      <div className="flex gap-2.5 items-center self-stretch px-6 py-4 my-auto bg-stone-50 min-h-[54px] min-w-60 w-[461px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2f2e1a3c62fc645e61682d4f1b73e92a9a84ac5?placeholderIfAbsent=true&apiKey=e4226e5af642463c93547f5f38565ee6"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Search icon"
        />
        <input
          type="text"
          placeholder="Search here..."
          className="self-stretch my-auto bg-transparent outline-none w-full"
        />
      </div>
    </div>
  );
}

export default SearchBar;
