import React from "react";

export default function Quote({ quote, author, from }) {
  return (
    <figure className="max-w-screen-md mx-auto text-center p-4">
      <svg
        className="w-8 mx-auto mb-3 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <p className="text-xl italic font-medium text-gray-900">{quote}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500">
          <cite className="pr-3 font-medium text-gray-900">{author}</cite>
          <cite className="pl-3 text-sm text-gray-500 ">{from}</cite>
        </div>
      </figcaption>
    </figure>
  );
}
