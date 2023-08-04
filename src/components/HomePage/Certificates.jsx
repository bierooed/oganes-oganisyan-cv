import React from "react";
import freeCodeCamp from "../../files/freeCodeCampLogo.png";
import cisco from "../../files/javascript-essentials-1.png";

const certificates = [
  {
    id: 0,
    pic: freeCodeCamp,
    issued: "freeCodeCamp",
    course: "JavaScript Algorithms and Data Structures",
    date: "June 16, 2023",
    verifyUrl:
      "https://www.freecodecamp.org/certification/fcc8d69f918-6af0-42db-896c-f87eba63d98f/javascript-algorithms-and-data-structures",
  },

  {
    id: 1,
    pic: cisco,
    issued: "Cisco",
    course: "JavaScript Essentials",
    date: "June 21, 2023",
    verifyUrl:
      "https://www.credly.com/badges/7d8fed45-6a40-4f81-99de-ed3997e713da/public_url",
  },
];

export default function Certificates() {
  return (
    <div className="text-center mt-16 p-4">
      {certificates.map(({ id, issued, pic, course, date, verifyUrl }) => {
        return (
          <div key={id} className="flex items-center">
            <img className="w-8" src={pic} />

            <div className="w-full p-8">
              <h3>{course}</h3>
              <p className="text-gray-600">
                {issued} - {date}
              </p>
              <a
                className="underline"
                href={verifyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Show accreditation
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}