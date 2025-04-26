"use client";
import React, { useState } from "react";

function TabNavigation() {
  const [activeTab, setActiveTab] = useState("Purchases");

  const tabs = [
    { id: "Products", label: "Products" },
    { id: "Purchases", label: "Purchases" },
    { id: "Reviews", label: "Reviews & Ratings" },
  ];

  return (
    <nav className="flex overflow-hidden flex-wrap gap-5 justify-between py-px mt-8 w-full text-xl font-bold bg-white max-w-[1031px] text-neutral-800 max-md:max-w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-3.5 whitespace-nowrap min-h-[49px] border-b-[3px] ${
            activeTab === tab.id
              ? "text-red-500 border-red-200"
              : "border-[#9C9C9C] border-solid"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default TabNavigation;
