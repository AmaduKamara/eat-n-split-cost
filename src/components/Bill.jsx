import React from "react";
import BillForm from "./BillForm";

function Bill() {
  return (
    <div className="flex-1 bg-cyan-100 px-5 py-6 rounded-md">
      <h2 className="uppercase font-semibold text-xl text-gray-600">
        Split a Bill with John Doe
      </h2>
      <BillForm />
    </div>
  );
}

export default Bill;
