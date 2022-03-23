import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Container from "../Container";

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
      <Container>
        <div>
          <FaAngleLeft className="left-arrow" onClick={prevSlide} />
            <FaAngleRight className="right-arrow" onClick={nextSlide} />
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <object
                    data={slide.video} //object with values for slider, received from section using it
                    alt="cybermonkeys slider currently not working" //if the page cant load the slide, this message will appear
                    className="w-screen items-stretch"
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default VideoSlider;
