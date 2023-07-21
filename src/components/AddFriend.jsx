import React, { useState } from "react";

function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = 117890;

    const newFriend = {
      id,
      name,
      image: image + `?u="${id}"`,
      balance,
    };

    if (name === "" && image === "") return;

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
    setBalance(0);
  };

  return (
    <form className="w-full bg-cyan-100 py-4 px-3 mt-5">
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label htmlFor="name">👭 Friend name</label>
        <input
          className="py-1 px-4 border rounded-md focus:outline-cyan-600 w-64"
          type="text"
          placeholder="Friend name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label htmlFor="photo">🎆 Image URL</label>
        <input
          className="py-1 px-4 border rounded-md focus:outline-cyan-600 w-64"
          type="text"
          value={image}
          id="photo"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="flex justify-end items-center">
        <div>
          <button className="py-1 mr-4 px-8 rounded-md border border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-slate-100 cursor-pointer transition duration-300">
            Cancel
          </button>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="py-1 px-6 border border-cyan-600 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300"
          >
            Add Friend
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddFriend;
