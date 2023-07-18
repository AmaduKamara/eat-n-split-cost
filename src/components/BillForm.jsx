import React from "react";

function BillForm() {
  return (
    <form className="w-full bg-cyan-100 py-4 px-3 mt-5">
      <div className="mb-5 flex items-center space-x-4 justify-between">
        <label htmlFor="billValue">💰 Bill value</label>
        <input
          className="py-2 px-4 w-[220px] border rounded-md focus:outline-cyan-600"
          type="text"
          placeholder="$ Bill amount"
          id="billValue"
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label htmlFor="yourExpense">🧍🏻‍♀️ Your expense</label>
        <input
          className="py-2 px-4 w-[220px] border rounded-md focus:outline-cyan-600"
          type="text"
          placeholder="Your expense"
          id="yourExpense"
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label htmlFor="friend">🧍🏻 John expense</label>
        <input
          className="py-2 px-4 w-[220px] border rounded-md focus:outline-cyan-600"
          type="text"
          placeholder="Your friend's expense"
          id="friend"
          disabled
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label htmlFor="whoIsPaying">🧍🏻🤑 Who is paying</label>

        <select
          className="py-2 px-3 w-[220px] border rounded-md focus:outline-cyan-600"
          id="whoIsPaying"
        >
          <option value="You">You</option>
          <option value="Friend">Friend</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button className="py-2 px-10 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300">
          Add Friend
        </button>
      </div>
    </form>
  );
}

export default BillForm;
