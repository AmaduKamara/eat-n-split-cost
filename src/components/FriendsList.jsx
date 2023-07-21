import Friend from "./Friend";
import AddFriend from "./AddFriend";

function FriendsList({ friends, onCloseForm, showForm }) {
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
            onClick={onCloseForm}
            className="flex-end items-end py-2 mt-2 px-8 border border-cyan-600 text-cyan-600 uppercase rounded-md hover:bg-cyan-700 hover:text-slate-50 transition duration-300"
          >
            Add friend
          </button>
        </div>
      )}
      {showForm && <AddFriend onCloseForm={onCloseForm} />}
    </div>
  );
}

export default FriendsList;
