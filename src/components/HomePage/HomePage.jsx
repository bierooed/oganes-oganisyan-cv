import React from "react";
import avatar from "../../files/avatar.png";
import Certificates from "./Certificates";
import Link from "./Link";

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
        <Link
          innerText="Check CV"
          href="https://drive.google.com/file/d/1B6Admg8mmBB4NmjC9Zrr8SszXxBQnKkX/view?usp=sharing"
        />
      </div>

      <Certificates />

      <div className="flex items-center flex-col mb-6">
        <h3 className="font-bold text-xl">Contacts</h3>
        <div className="text-center mt-4">
          <p>Phone: + (374) 93 784979</p>
          <p>Email: h.hovanes13@gmail.com</p>
          <Link innerText="Linkedin" href="https://linkedin.com/in/hov13" />

          {" / "}
          <Link innerText="Github" href="https://github.com/bierooed" />
        </div>
      </div>
    </div>
  );
}
