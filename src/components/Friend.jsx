import React from "react";

function Friend({ friend }) {
  return (
    <li className="mb-3 shadow-lg bg-white hover:bg-cyan-50 py-2 px-4 rounded-md flex items-center justify-between space-x-6">
      <div className="flex items-center space-x-6">
        <div className="w-[40px] h-[40px] rounded-full shadow overflow-hidden">
          <img src={friend.image} alt={friend.name} />
        </div>
        <div>
          <h3 className="font-semibold">{friend.name}</h3>
          <p className="text-xs">John Doe owes you</p>
        </div>
      </div>
      <button className="py-1 px-4 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300">
        Select
      </button>
    </li>
  );
}

export default Friend;
