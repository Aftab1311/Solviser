"use client";
import React from "react";
import DownloadIcon from "./DownloadIcon";
import CalendarIcon from "./CalendarIcon";

const TransactionHeader = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
      />
      <header className="box-border flex justify-between items-center px-5 py-0 mx-auto w-full max-w-none max-md:flex-col max-md:items-start max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <h1 className="text-3xl font-bold text-neutral-800 max-sm:text-2xl">
          Total Transactions
        </h1>
        <div className="flex gap-4 items-center max-md:gap-2.5">
          <ExportButton />
          <DateButton label="Start Date" />
          <DateButton label="End Date" isEndDate />
        </div>
      </header>
    </>
  );
};

const ExportButton = () => {
  return (
    <button className="box-border flex justify-center items-center p-4 w-36 text-sm font-bold bg-rose-100 rounded border border-solid border-red-500 border-opacity-20 h-[46px] text-neutral-800 max-sm:justify-between max-sm:p-2.5 max-sm:w-full">
      <span>Export PDF</span>
      <div className="ml-2.5">
        <DownloadIcon />
      </div>
    </button>
  );
};

const DateButton = ({ label, isEndDate = false }) => {
  return (
    <button className="box-border flex justify-center items-center p-4 w-36 text-sm font-bold bg-white rounded border border-solid border-neutral-300 border-opacity-70 h-[46px] text-neutral-800 max-sm:justify-between max-sm:p-2.5 max-sm:w-full">
      <span>{label}</span>
      <div className="ml-2.5">
        <CalendarIcon isEndDate={isEndDate} />
      </div>
    </button>
  );
};

export default TransactionHeader;
