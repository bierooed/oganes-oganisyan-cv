import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import HomePage from "./components/HomePage/HomePage";
import Projects from "./components/Projects/Projects";
import Library from "./components/Library/Library";

function App() {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-xl">
      <header className="w-full">
        <Navigation />
      </header>

      <main className="w-full mt-8">
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.projects} element={<Projects />} />
          <Route path={paths.library} element={<Library />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
