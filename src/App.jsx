import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="flex flex-col justify-center items-start mx-auto mb-16 max-w-xl">
      <header className="w-full">
        <Navigation />
      </header>

      <main className="w-full mt-8">
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
