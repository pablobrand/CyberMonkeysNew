import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Container } from "next/app";

const VideoSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //controla la posicion de los slides
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //if no slides no muestra nada
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //This file is exported to MediaSection.tsx
  //The style and animation are in folder "styles", file "VideoSlider.css" You can't import the css file here, it is in _app
  //"FaAngle" are icons
  return (
    <section className="slider">
      <div className="items-center">
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
                  data={slide.video} //loads the current slide from "SliderData.js" file
                  alt="cybermonkeys slider"
                  className="video" //if the page cant load the slide, this message will appear
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoSlider;
