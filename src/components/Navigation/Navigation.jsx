import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import { paths } from "../../paths";

export default function Navigation() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <h1 className="text-xl">Oganes Oganisyan</h1>
      <button
        onClick={() => setDropdown(!dropdown)}
        className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 hover:bg-gray-100"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className={`${dropdown ? "" : "hidden"} w-full`}>
        <div className="flex flex-col font-medium mt-4 rounded-lg">
          <NavigationLink path={paths.home} innerText="About me" />
          <NavigationLink path={paths.projects} innerText="Projects" />
          <NavigationLink path={paths.library} innerText="Library" />
          <NavigationLink path={paths.cv} innerText="CV" />
        </div>
      </div>
    </nav>
  );
}
