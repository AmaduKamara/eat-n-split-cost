import React, { useState } from "react";

function AddFriend({ onAddFriend, setShowForm }) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
    setBalance(0);

    setShowForm(false);
  };

  return (
    <form className="w-full bg-cyan-100 py-4 px-3 mt-5" onSubmit={handleSubmit}>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="text-sm md:text-lg" htmlFor="name">👭 Friend name</label>
        <input
          className="py-1 px-4 border rounded-md focus:outline-cyan-600 w-40 md:w-64"
          type="text"
          placeholder="Friend name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="text-sm md:text-lg" htmlFor="image">🎆 Image URL</label>
        <input
          className="py-1 px-4 border rounded-md focus:outline-cyan-600 w-40 md:w-64"
          type="text"
          id="image"
          disabled
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="flex justify-end items-center">
        <button className="py-1 px-6 border border-cyan-600 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300">
          Add Friend
        </button>
      </div>
    </form>
  );
}

export default AddFriend;
