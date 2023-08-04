import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationLink({ path, innerText }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        const classname = "block py-2 pl-3 pr-4 bg-gray-800 rounded";
        return isActive
          ? classname + " text-white"
          : classname + " bg-white text-gray-700";
      }}
    >
      {innerText}
    </NavLink>
  );
}
