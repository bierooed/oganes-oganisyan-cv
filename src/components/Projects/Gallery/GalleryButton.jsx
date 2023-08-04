import React from "react";

export default function GalleryButton({ type, handleClick, Svg }) {
  return (
    <button
      style={{ "-webkit-tap-highlight-color": "transparent" }}
      onClick={handleClick}
      className={`absolute top-0 ${
        type === "prev" ? "left-0" : "right-0"
      } z-50 flex items-center justify-center h-full px-4 cursor-pointer outline-none`}
    >
      <Svg className="text-white" />
    </button>
  );
}
