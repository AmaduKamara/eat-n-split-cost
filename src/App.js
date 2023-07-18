import Bill from "./components/Bill";
import FriendsList from "./components/FriendsList";
import Header from "./components/Header";



function App() {
  return (
    <div className="w-full h-screen bg-slate-100 py-24">
      <div className="w-[900px] container mx-auto">
        <Header />
        <div className="flex gap-8 mt-10">
          <FriendsList />
          <Bill />
        </div>
      </div>
    </div>
  );
}

export default App;
