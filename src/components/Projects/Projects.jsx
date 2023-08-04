import React from "react";
import hyeboxProject from "../../files/hyeboxProject.png";
import cognitiveProject from "../../files/cognitiveProject.png";
import sightseeingProject from "../../files/sightseeingProject.png";
import tmImageModelProject from "../../files/tm-image-model-project.png";
import Links from "./Links";

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
    pic: hyeboxProject,
    role: "Fullstack Frontend Developer",

    description:
      "In this project I occupied the role of Fullstack Frontend Developer. I was creating a site for selling boxes with various souvenirs from Armenia. The purchase process was organized as a subscription, after selecting the desired tariff the user had to answer a few questions so that we could choose a box according to his preferences. The user then had to provide personal information and online payment for their subscription. After payment, the order was added to the database and to Google Spreadsheet for a more convenient interface to work with orders from users.",

    links: [
      {
        id: 0,
        href: "https://the-hyebox.vercel.app/",
        innerText: "Non-production link",
      },
    ],
  },

  {
    id: 1,
    project: "Cognitive test",
    stack: ["React", "Redux", "TensorflowJS", "Firebase", "Tailwind"],
    pic: cognitiveProject,
    description:
      "This project is my term paper. The basis of the project is the Kaufman psychological test, which helps people who do not have access to medicine to identify cognitive distortions in their children.",

    links: [
      {
        id: 0,
        href: "https://vercel.com/bierooed/cognitive-test",
        innerText: "Non-production link",
      },
    ],

    downloadedLinks: [
      {
        id: 0,
        href: "/src/files/Developed with love in Armenia.pdf",
        innerText: "Course work presentation (pdf)",
      },
      {
        id: 1,
        href: "/src/files/Курсовая работа Оганисян Оганес .pdf",
        innerText: "Course work presentation",
      },
    ],
  },

  {
    id: 2,
    project: "Sightseeing",
    stack: ["React", "Teachable Machine"],
    pic: sightseeingProject,
    description:
      " The idea of project is to recognize landmarks and beautiful buildings of Yerevan, the user uploads a photo and the trained model tries to recognize and tell the user about this building. Only a draft version of the site is still ready, but the idea is fully realized.",
    links: [
      {
        id: 0,
        href: "https://sightseeing.vercel.app/",
        innerText: "Non-production link",
      },
    ],
  },

  {
    id: 3,
    project: "Teachable Machine model to classify images",
    stack: ["JavaScript", "Tensorflow"],
    pic: tmImageModelProject,
    description:
      "Package provides the ability to easily customize a model trained in Teachable Machine into your project",
    links: [
      {
        id: 0,
        href: "https://www.npmjs.com/package/tm-image-model",
        innerText: "npm package",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center p-4">
      {projects.map(
        ({ id, project, stack, description, pic, links, downloadedLinks }) => {
          return (
            <div key={id} className="text-center border-b border-gray-300 mt-8">
              <img src={pic} />
              <h3>{project}</h3>
              <div className="flex flex-col flex-wrap items-center justify-center">
                <div className="flex flex-wrap justify-center items-center">
                  {!!links && <Links links={links} />}
                </div>
                <div className="flex flex-wrap mt-3 justify-center items-center">
                  {!!downloadedLinks && (
                    <Links isDownload={true} links={downloadedLinks} />
                  )}
                </div>
              </div>
              <p className="py-4">{description}</p>
              <div className="flex justify-center flex-wrap mb-6">
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
        }
      )}
    </div>
  );
}
