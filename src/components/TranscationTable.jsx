import React from "react";
import StatusBadge from "./StatusBadge";

function TransactionTable() {
  const transactions = [
    {
      id: "#12345",
      customer: "Devid roh",
      date: "22-05-2025",
      status: "Completed",
    },
    {
      id: "#12345",
      customer: "Devid roh",
      date: "22-05-2025",
      status: "Pending",
    },
    {
      id: "#12345",
      customer: "John Doe",
      date: "22-05-2025",
      status: "Overdue",
    },
    {
      id: "#12345",
      customer: "Devid roh",
      date: "22-05-2025",
      status: "Completed",
    },
    {
      id: "#12345",
      customer: "John Doe",
      date: "22-05-2025",
      status: "Pending",
    },
  ];

  return (
    <section className="flex flex-col justify-center p-5 mt-8 w-full bg-white max-md:max-w-full">
      <div className="overflow-x-auto w-full max-md:max-w-full">
        <table className="w-full max-md:max-w-full">
          <thead className="pb-2.5 w-full text-base font-bold text-center text-black whitespace-nowrap border-b border-solid border-b-[color:var(--Colors-Secondary-Black-Variation-Black-200,#D4D4D4)] max-md:max-w-full">
            <tr className="flex gap-10 items-center w-full h-[37px] max-md:max-w-full">
              <th className="self-stretch py-3 my-auto w-[130px] text-left">
                ID
              </th>
              <th className="gap-1.5 self-stretch py-3 my-auto w-[130px] text-left">
                Customer
              </th>
              <th className="self-stretch py-3 my-auto w-[130px] text-left">
                Date
              </th>
              <th className="gap-1.5 self-stretch py-2.5 my-auto min-h-[38px] w-[130px] text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="mt-2.5 w-full text-xs text-zinc-600 max-md:max-w-full">
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className="flex gap-10 items-center w-full max-md:max-w-full"
              >
                <td className="self-stretch py-3.5 my-auto leading-6 whitespace-nowrap min-h-[47px] w-[140px]">
                  {transaction.id}
                </td>
                <td className="flex-1 shrink self-stretch py-3.5 my-auto w-36 leading-6 basis-0 min-h-[47px]">
                  {transaction.customer}
                </td>
                <td className="self-stretch py-4 my-auto leading-6 whitespace-nowrap w-[141px]">
                  {transaction.date}
                </td>
                <td className="flex items-center self-stretch py-4 my-auto font-bold text-center whitespace-nowrap w-[140px]">
                  <StatusBadge status={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TransactionTable;
