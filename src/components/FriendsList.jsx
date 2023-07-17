import React, { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

function FriendsList() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex-1">
      <Friend />
      <Friend />
      <Friend />

      {!showForm && (
        <div className="flex justify-end">
          <button
            onClick={() => setShowForm(true)}
            className="flex-end items-end py-3 px-8 border border-cyan-600 text-cyan-600 uppercase rounded-md hover:bg-cyan-700 hover:text-slate-50 transition duration-300"
          >
            Add friend
          </button>
        </div>
      )}
      {showForm && <AddFriend />}
    </div>
  );
}

export default FriendsList;
