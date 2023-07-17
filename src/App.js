import Bill from "./components/Bill";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="w-full h-screen bg-slate-100 py-24">
      <div className="w-[900px] container mx-auto">
        <h1 className="w-full p-6 bg-cyan-600 text-lg sm:text-1xl md:text-2xl text-slate-100">
          Ean-N-Split
        </h1>
        <div className="flex gap-8 mt-10">
          <FriendsList />
          <Bill />
        </div>
      </div>
    </div>
  );
}

export default App;
