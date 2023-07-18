import React from "react";

function Friend() {
  return (
    <div className="mb-6 shadow-lg bg-white hover:bg-cyan-50 py-2 px-4 rounded-md flex items-center justify-between space-x-6">
      <div className="flex items-center space-x-6">
        <div className="w-[50px] h-[50px] rounded-full shadow">
          <img src="" alt="" />
        </div>
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-xs">John Doe owes you</p>
        </div>
      </div>
      <button className="py-2 px-4 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300">
        Select
      </button>
    </div>
  );
}

export default Friend;
