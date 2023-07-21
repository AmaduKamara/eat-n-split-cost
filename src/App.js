import { useState } from "react";
import SplitBill from "./components/SplitBill";
import FriendsList from "./components/FriendsList";
import Header from "./components/Header";

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

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleCloseForm = () => {
    setShowForm((show) => !show);
    setSelectedFriend(null);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  // Handles friend selection that gets passed to the friend with it value
  const handleSelection = (friend) => {
    // check if the current friend id equals the friend id and render null else render the friend object
    setSelectedFriend((currFriend) =>
      currFriend?.id === friend.id ? null : friend
    );

    setShowForm(false);
  };

  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="container mx-auto">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <FriendsList
            friends={friends}
            onCloseForm={handleCloseForm}
            showForm={showForm}
            onAddFriend={handleAddFriend}
            setShowForm={setShowForm}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />
          {/* Only if a friend is selected, then the bill form shows */}
          {selectedFriend && <SplitBill selectedFriend={selectedFriend} />}
        </div>
      </div>
    </div>
  );
}

export default App;
