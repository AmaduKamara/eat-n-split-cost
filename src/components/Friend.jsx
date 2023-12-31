import React from "react";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`${
        isSelected
          ? "bg-cyan-100 mb-3 shadow-lg hover:bg-cyan-50 transition-all duration-300 py-2 px-4 rounded-md flex items-center justify-between space-x-6"
          : "mb-3 shadow-lg bg-white hover:bg-cyan-50 transition-all duration-300 py-2 px-4 rounded-md flex items-center justify-between space-x-6"
      } `}
    >
      <div className="flex items-center space-x-6">
        <div className="w-[40px] h-[40px] rounded-full shadow overflow-hidden">
          <img src={friend.image} alt={friend.name} />
        </div>
        <div>
          <h3 className="font-semibold">{friend.name}</h3>
          {friend.balance < 0 && (
            <p className="text-xs md:text-lg text-red-300">
              You owe {friend.name} ${Math.abs(friend.balance)}
            </p>
          )}
          {friend.balance > 0 && (
            <p className="text-xs md:text-lg text-green-400">
              {friend.name} owes you ${Math.abs(friend.balance)}
            </p>
          )}
          {friend.balance === 0 && (
            <p className="text-xs md:text-lg">
              You and {friend.name} are even{" "}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => onSelection(friend)}
        className="py-1 md:py-2 px-4 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300"
      >
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default Friend;
