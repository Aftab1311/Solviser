"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import TabNavigation from "./TabNavigation";
import PurchaseHistory from "./PurchaseHistory";

function SupplierBuyerProfile() {
  return (
    <main className="overflow-hidden bg-stone-50">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="w-[24%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </aside>
        <section className="ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center w-full max-md:max-w-full">
            <Header />
            <div className="mt-8 w-full max-w-[1031px] max-md:max-w-full">
              <h1 className="text-3xl font-bold text-neutral-800 max-md:max-w-full">
                Supplier & Buyer Profile
              </h1>
              <ProfileCard />
            </div>
            <TabNavigation />
            <PurchaseHistory />
          </div>
        </section>
      </div>
    </main>
  );
}

export default SupplierBuyerProfile;
