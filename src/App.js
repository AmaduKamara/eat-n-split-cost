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

  const handleCloseForm = () => {
    setShowForm((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
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
          />
          <SplitBill />
        </div>
      </div>
    </div>
  );
}

export default App;
