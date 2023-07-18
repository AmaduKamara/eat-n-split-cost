import React, { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Amkam",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function FriendsList() {
  const [showForm, setShowForm] = useState(false);
  const friends = initialFriends;

  const closeAddFriendForm = () => {
    setShowForm(false);
  };

  return (
    <div className="flex-1">
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>

      {!showForm && (
        <div className="flex justify-end">
          <button
            onClick={() => setShowForm(true)}
            className="flex-end items-end py-2 mt-2 px-8 border border-cyan-600 text-cyan-600 uppercase rounded-md hover:bg-cyan-700 hover:text-slate-50 transition duration-300"
          >
            Add friend
          </button>
        </div>
      )}
      {showForm && <AddFriend onCloseForm={closeAddFriendForm} />}
    </div>
  );
}

export default FriendsList;
