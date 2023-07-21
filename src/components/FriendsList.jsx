import Friend from "./Friend";
import AddFriend from "./AddFriend";

function FriendsList({ friends, onCloseForm, showForm, onAddFriend }) {
  return (
    <div className="mx-6">
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>

      {showForm && (
        <AddFriend onCloseForm={onCloseForm} onAddFriend={onAddFriend} />
      )}

      {!showForm && (
        <div className="flex justify-end">
          <button
            onClick={onCloseForm}
            className="flex-end items-end py-2 mt-2 px-8 border border-cyan-600 text-cyan-600 uppercase rounded-md hover:bg-cyan-700 hover:text-slate-50 transition duration-300"
          >
            Add Friend
          </button>
        </div>
      )}
      {showForm && (
        <div className="flex justify-end">
          <button
            onClick={onCloseForm}
            className="flex-end items-end py-2 mt-4 px-8 border border-cyan-600 text-cyan-600 uppercase rounded-md hover:bg-cyan-700 hover:text-slate-50 transition duration-300"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default FriendsList;
