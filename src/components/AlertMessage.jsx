import React from "react";

const AlertMessage = () => {
  return (
    <div className="flex gap-2 p-2 mt-4 text-sm text-gray-800 bg-amber-50 rounded-md">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/374868d3f01a9591b1ce35baf5bce955344173cf?placeholderIfAbsent=true&apiKey=d6e525a4e9364625adeb145cba8910e3"
        alt="Warning icon"
        className="object-contain shrink-0 my-auto w-4 aspect-square"
      />
      <p className="py-1  bg-opacity-0">Slight decrease expected</p>
    </div>
  );
};

export default AlertMessage;
