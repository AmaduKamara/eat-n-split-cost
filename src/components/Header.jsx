import React from "react";

function Header() {
  return (
    <header className="sticky top-0">
      <h1 className="flex justify-between items-center w-full py-5 px-6 bg-white text-cyan-600 text-lg sm:text-1xl md:text-3xl">
        <span>🍕</span> <span>Split-Bill</span> <span>🍔</span>
      </h1>
    </header>
  );
}

export default Header;
