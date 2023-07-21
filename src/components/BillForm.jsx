import { useState } from "react";

function BillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    // Split the bill and update the friend selected's value
    const isUserPaying = whoIsPaying === "user";
    
    onSplitBill(isUserPaying ? paidByFriend : -paidByUser);
  };

  return (
    <form className="w-full bg-cyan-100 px-3 mt-5" onSubmit={handleSubmit}>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="sm:text-xs md:text-lg" htmlFor="billValue">
          💰 Bill value
        </label>
        <input
          className="py-1 md:py-2 px-4  w-[150px] border rounded-md focus:outline-cyan-600"
          type="number"
          id="billValue"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="sm:text-xs md:text-lg" htmlFor="yourExpense">
          🧍🏻‍♀️ Your expense
        </label>
        <input
          className="py-1 md:py-2 px-4  w-[150px] border rounded-md focus:outline-cyan-600"
          type="number"
          id="yourExpense"
          value={paidByUser}
          // Thi input value must not be greater than the bill, if so, return the paidby user value or the value entered
          onChange={(e) =>
            setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
          }
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="sm:text-xs md:text-lg" htmlFor="friend">
          🧍🏻 {selectedFriend.name}'s expense
        </label>
        <input
          className="py-1 md:py-2 px-4  w-[150px] border rounded-md focus:outline-cyan-600"
          type="number"
          placeholder="$0.00"
          id="friend"
          disabled
          value={paidByFriend}
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="sm:text-xs md:text-lg" htmlFor="whoIsPaying">
          🧍🏻🤑 Who is paying
        </label>

        <select
          className="py-1 md:py-2 px-3 w-[150px] border rounded-md focus:outline-cyan-600"
          id="whoIsPaying"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">Friend</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="py-1 md:py-2 px-12 border border-cyan-600 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300"
        >
          Add Bill
        </button>
      </div>
    </form>
  );
}

export default BillForm;
