import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const VideoSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <section className="slider">
    {SliderData.map((slide, index) => {
      return <object data={slide.video} alt='cybermonkeys slider' />
      
      
    })}
    
    </section>
  );
};

export default VideoSlider;
