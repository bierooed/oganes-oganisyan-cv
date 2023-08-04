import React, { useState } from "react";
import GalleryButton from "./GalleryButton";
import { ReactComponent as PrevSvg } from "./assets/prev.svg";
import { ReactComponent as NextSvg } from "./assets/next.svg";

export default function Gallery({ pics }) {
  const [currentPicId, setCurrentPicId] = useState(0);

  const handlePrevButton = () => {
    if (currentPicId !== 0) {
      setCurrentPicId(currentPicId - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPicId !== pics.length - 1) {
      setCurrentPicId(currentPicId + 1);
    }
  };
  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-72">
        {pics.map((pic, idx) => {
          return (
            <div
              key={idx}
              className={`${
                currentPicId === idx ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={pic}
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
          );
        })}
      </div>

      <GalleryButton type="prev" handleClick={handlePrevButton} Svg={PrevSvg} />
      <GalleryButton type="next" handleClick={handleNextButton} Svg={NextSvg} />
    </div>
  );
}
