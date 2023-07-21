import React from "react";
import BillForm from "./BillForm";

function SplitBill({ selectedFriend, onSplitBill }) {
  return (
    <div className="mx-6 bg-cyan-100 px-5 py-6 rounded-md border-l-4 border-cyan-600 h-[360px] mb-16">
      <h2 className="uppercase font-semibold text-xl text-gray-600">
        Split a Bill with {selectedFriend.name}
      </h2>
      <BillForm onSplitBill={onSplitBill} selectedFriend={selectedFriend} />
    </div>
  );
}

export default SplitBill;
