import { useState } from "react";
import Bill from "./components/Bill";
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

  return (
    <div className="w-full h-screen bg-slate-100 py-24">
      <div className="w-[900px] container mx-auto">
        <Header />
        <div className="flex gap-8 mt-10">
          <FriendsList
            friends={friends}
            onCloseForm={handleCloseForm}
            showForm={showForm}
          />
          <Bill />
        </div>
      </div>
    </div>
  );
}

export default App;
