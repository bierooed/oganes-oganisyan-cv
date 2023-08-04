import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationLink({ path, innerText }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        const classname = "block py-2 pl-3 pr-4 text-white bg-gray-800 rounded";
        return isActive ? classname : classname + " bg-white text-gray-700";
      }}
    >
      {innerText}
    </NavLink>
  );
}
