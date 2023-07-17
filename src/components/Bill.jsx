import React from "react";

function Bill() {
  return (
    <div className="flex-1 bg-cyan-100 px-5 py-6">
      <h2 className="uppercase font-semibold text-xl text-gray-600">
        Split a Bill with John Doe
      </h2>
      <form className="w-full bg-cyan-100 py-4 px-3 mt-5">
        <div className="mb-5 flex items-center space-x-4 justify-between">
          <label htmlFor="name">💰 Bill value</label>
          <input
            className="py-2 px-4 w-[220px] border rounded-md focus:outline-cyan-600"
            type="text"
            placeholder="$ Bill amount"
          />
        </div>
        <div className="mb-3 flex items-center space-x-4 justify-between">
          <label htmlFor="name">🧍🏻‍♀️ Your expense</label>
          <input
            className="py-2 px-4 w-[220px] border rounded-md focus:outline-cyan-600"
            type="text"
            placeholder="Your expense"
          />
        </div>
        <div className="mb-3 flex items-center space-x-4 justify-between">
          <label htmlFor="name">🧍🏻 John expense</label>
          <input
            className="py-2 px-4 w-[220px] border rounded-md focus:outline-cyan-600"
            type="text"
            placeholder="Your friend's expense"
          />
        </div>
        <div className="mb-3 flex items-center space-x-4 justify-between">
          <label htmlFor="whoIsPaying">🧍🏻‍♀️ Who is paying</label>

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
    </div>
  );
}

export default Bill;
