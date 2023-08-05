import React from "react";

export default function Link({ href, innerText }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="underline text-blue-500"
      href={href}
    >
      {innerText}
    </a>
  );
}
