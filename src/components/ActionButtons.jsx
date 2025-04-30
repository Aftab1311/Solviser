"use client";
import React from "react";
import ActionButton from "./ActionButton";
import { DownloadIcon, BlockIcon, ContractIcon, BuyersIcon } from "./Icons";

const ActionButtons = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
        rel="stylesheet"
      />
      <section className="flex gap-6 justify-center items-center max-md:flex-col max-md:gap-4 max-sm:gap-3">
        <ActionButton
          icon={DownloadIcon}
          text="Download Full Risk Report"
          variant="red"
        />
        <ActionButton
          icon={BlockIcon}
          text="Block High-Risk Buyers"
          variant="red"
        />
        <ActionButton
          icon={ContractIcon}
          text="Create New Contract"
          variant="emerald"
        />
        <ActionButton
          icon={BuyersIcon}
          text="Connect with Verified Buyers"
          variant="blue"
        />
      </section>
    </>
  );
};

export default ActionButtons;
