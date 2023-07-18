import React from "react";

function AddFriend({ onCloseForm }) {
  return (
    <form className="w-full bg-cyan-100 py-4 px-3 mt-5">
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label htmlFor="name">👭 Friend name</label>
        <input
          className="py-1 px-4 border rounded-md focus:outline-cyan-600 w-64"
          type="text"
          placeholder="Friend name"
          id="name"
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label htmlFor="photo">🎆 Image URL</label>
        <input
          className="py-1 px-4 border rounded-md focus:outline-cyan-600 w-64"
          type="text"
          value="https://i.pravatar.cc/48"
          id="photo"
        />
      </div>
      <div className="flex justify-end">
        <butto
          onClick={onCloseForm}
          className="py-2 px-8 mr-4 rounded-md border border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-slate-100 cursor-pointer transition duration-300"
        >
          Cancel
        </butto>
        <button className="py-2 px-6 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300">
          Add Friend
        </button>
      </div>
    </form>
  );
}

export default AddFriend;
