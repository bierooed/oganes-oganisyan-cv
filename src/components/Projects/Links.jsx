import React from "react";

export default function Links({ links, isDownload }) {
  return links.map(({ id, href, innerText }) => (
    <>
      <div>
        <a
          key={id}
          download={isDownload}
          className={`inline-flex justify items-center ${
            isDownload ? "" : "underline"
          }`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {isDownload && (
            <svg
              className="w-4 mx-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
              />
            </svg>
          )}
          {innerText}
        </a>
      </div>
      {id !== links.length - 1 && (
        <span className={`ml-2 ${!isDownload && "mr-2"}`}>/</span>
      )}
    </>
  ));
}
