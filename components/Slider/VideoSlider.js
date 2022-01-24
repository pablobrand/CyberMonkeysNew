import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const VideoSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaAngleLeft className="left-arrow" onClick={prevSlide} />
      <FaAngleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <object
                data={slide.video}
                alt="cybermonkeys slider"
                className="video"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default VideoSlider;
