import React from "react";
import Quote from "./Quote";

const favoriteBooks = [
  {
    id: 0,
    author: "Mikhail Lermontov",
    title: "A Hero of Our Time",
    type: "fiction",
  },

  {
    id: 1,
    author: "Bill Bryson",
    title: "A Short History of Nearly Everything",
    type: "non-fiction",
  },
  {
    id: 2,
    author: "Johann Wolfgang von Goethe",
    title: "Faust",
    type: "fiction",
  },

  {
    id: 3,
    author: "Benjamin Franklin",
    title: "Autobiography",
    type: "non-fiction",
  },

  {
    id: 4,
    author: "Stephen Hawking",
    title: "A Brief History of Time",
    type: "non-fiction",
  },

  {
    id: 5,
    author: "Fyodor Dostoevsky",
    title: "White Nights",
    type: "fiction",
  },

  {
    id: 6,
    author: "Charles Maurice de Talleyrand",
    title: "Memoirs of the Prince de Talleyrand",
    type: "non-fiction",
  },

  {
    id: 7,
    author: "Paulo Coelho",
    title: "The Alchemist",
    type: "fiction",
  },

  {
    id: 8,
    author: "David Deutsch",
    title: "The Fabric of Reality",
    type: "non-fiction",
  },
];

export default function Library() {
  return (
    <div className="flex flex-col items-center text-center p-2">
      <Quote
        quote="Sheldon, you didn't have a personality. You just had some shows
            you liked"
        author="Leonard Hofstadter"
        from="The Big Bang Theory"
      />

      <div className="p-4">
        <div className="border-b">
          <span>
            Soo, you can see a list of my favorite films{" "}
            <a
              className="text-indigo-500 underline"
              target="_blank"
              rel="noreferrer"
              href="https://boxd.it/onP2A$pS0aMi3n0u8drmna"
            >
              here
            </a>
          </span>
        </div>
      </div>

      <div className="p-12">
        <h3 className="text-xl font-bold">Favorite books</h3>

        <ul className="text-gray-500 list-disc mt-4">
          {favoriteBooks.map(({ id, author, title, type }) => {
            return (
              <li className="p-2 text-start" key={id}>
                <span className="text-black">{title}</span> -{" "}
                <span className="text-gray-400">{author}</span>
                <span
                  className={`${
                    type === "fiction"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-green-100 text-green-800"
                  } mx-3 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}
                >
                  {type}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
