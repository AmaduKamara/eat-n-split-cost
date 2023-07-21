import React from "react";
import BillForm from "./BillForm";

function SplitBill() {
  return (
    <div className="flex-1 bg-cyan-100 px-5 py-6 rounded-md border-l-4 border-cyan-600">
      <h2 className="uppercase font-semibold text-xl text-gray-600">
        Split a Bill with John Doe
      </h2>
      <BillForm />
    </div>
  );
}

export default SplitBill;
