import React from "react";
import avatar from "../../files/avatar.png";
import Certificates from "./Certificates";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <img className="w-28" src={avatar} />
      <div className="text-center mt-3">
        <h2 className="text-xl mb-2">Oganes Oganisyan</h2>
        <p className="text-md text-gray-500">
          I&apos;m a Junior Engineer with a passion for design and project
          creation
        </p>
        <a
          className="underline"
          href="https://drive.google.com/file/d/1B6Admg8mmBB4NmjC9Zrr8SszXxBQnKkX/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Check CV
        </a>
      </div>

      <Certificates />
    </div>
  );
}
