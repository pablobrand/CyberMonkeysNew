import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

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

  //"FaAngle" are icons
  return (
    <section className="slider">
      <FaAngleLeft className="left-arrow" onClick={prevSlide} />
      <FaAngleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <video //in order to see the images, change "video" for "object"
                autoPlay
                playsInline
                loop
                muted
                data={slide.video}
                alt="cybermonkeys slider currently not working"
                src="https://res.cloudinary.com/cybermonkeysllc/video/upload/v1647887060/CyberMonkeys/B1_zdvhe0.mp4"
                className="w-screen"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default VideoSlider;
