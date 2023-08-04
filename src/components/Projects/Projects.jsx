import React from "react";
import Gallery from "./Gallery/Gallery";
import hyebox1 from "./hyebox/hyebox1.png";
import hyebox2 from "./hyebox/hyebox2.png";
import hyebox3 from "./hyebox/hyebox3.png";
import hyebox4 from "./hyebox/hyebox4.png";
import hyebox5 from "./hyebox/hyebox5.png";

const projects = [
  {
    id: 0,
    project: "HYE box",
    stack: [
      "React",
      "Firebase",
      "CSS Modules",
      "Payment Integration",
      "Facebook pixel",
    ],
    pics: [hyebox1, hyebox2, hyebox3, hyebox4, hyebox5],
    role: "Fullstack Frontend Developer",

    description:
      "In this project I occupied the role of Fullstack Frontend Developer. I was creating a site for selling boxes with various souvenirs from Armenia. The purchase process was organized as a subscription, after selecting the desired tariff the user had to answer a few questions so that we could choose a box according to his preferences. The user then had to provide personal information and online payment for their subscription. After payment, the order was added to the database and to Google Spreadsheet for a more convenient interface to work with orders from users.",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center p-4">
      {projects.map(({ id, project, stack, description, pics }) => {
        return (
          <div key={id} className="text-center">
            <Gallery pics={pics} />
            <h3>{project}</h3>

            <a
              className="underline"
              href="https://the-hyebox.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Non-production link
            </a>
            <p className="py-4">{description}</p>
            <div className="flex justify-start flex-wrap">
              {stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 py-1.5 my-2 px-3 mx-2 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
