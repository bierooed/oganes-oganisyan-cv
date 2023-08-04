import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="flex flex-col justify-center items-start mx-auto mb-16 max-w-xl">
      <header className="w-full">
        <Navigation />
      </header>

      <main className="w-full mt-20">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
