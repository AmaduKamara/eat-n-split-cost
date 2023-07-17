import React from "react";
import Friend from "./Friend";

function FriendsList() {
  return (
    <div className="flex-1">
      <Friend />
      <Friend />
      <Friend />

      <div className="flex justify-end">
        <button className="flex-end items-end py-3 px-8 border border-cyan-600 text-cyan-600 uppercase rounded-md hover:bg-cyan-700 hover:text-slate-50 transition duration-300">
          Add friend
        </button>
      </div>
      <form className="w-full bg-cyan-100 py-4 px-3 mt-5">
        <div className="mb-5 flex items-center space-x-4 justify-between">
          <label htmlFor="name">👭 Friend name</label>
          <input
            className="py-2 px-4 border rounded-md focus:outline-cyan-600 w-64"
            type="text"
            placeholder="Friend name"
          />
        </div>
        <div className="mb-3 flex items-center space-x-4 justify-between">
          <label htmlFor="name">🎆 Image URL</label>
          <input
            className="py-2 px-4 border rounded-md focus:outline-cyan-600 w-64"
            type="text"
            placeholder="Friend name"
          />
        </div>
        <div className="flex justify-end">
          <button className="py-2 w-64 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300">
            Add Friend
          </button>
        </div>
      </form>
    </div>
  );
}

export default FriendsList;
