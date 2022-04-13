import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import React, { useState, useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Video, Image, CloudinaryContext, Transformation } from "cloudinary-react";

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

  const switchingElements = (slide) => {
    //console.log("current number: " + current);
    //console.log("slides value: " + JSON.stringify(slide));
    const videoRef = useRef();
    if (current === 0) {
      return (
        <>
           <CloudinaryContext cloud_name="cybermonkeysllc">
            <div>
                <Video
                    publicId="CyberMonkeys/B1_zdvhe0"
                    autoplay = "true"
                    sound = "false"
                    loop = "true"
                    className="w-screen"
                    innerRef={videoRef}>
                      <Transformation effect="fade:500"/>

                </Video>
            </div>
        </CloudinaryContext>
        </>
      );
    } 
    if (current === 1){
      return (
        <>
        <CloudinaryContext cloud_name="cybermonkeysllc">
            <div>
                <Image
                    publicId="CyberMonkeys/20100925_WBP504_ft3ywl.webp"
                    className="w-screen"
                    innerRef={videoRef}>

                </Image>
            </div>
        </CloudinaryContext>
         
        </>
      );
    }
    if (current === 2){
      return (
        <>
        <CloudinaryContext cloud_name="cybermonkeysllc">
            <div>
                <Image
                    publicId="CyberMonkeys/gautier-salles-uffQnKuJ-hc-unsplash_fl7nsn.jpg"
                    className="w-screen"
                    innerRef={videoRef}>

                </Image>
            </div>
        </CloudinaryContext>
         
        </>
      );
    }
    else {
      return (
        <>
        <CloudinaryContext cloud_name="cybermonkeysllc">
            <div>
                <Image
                    publicId="CyberMonkeys/robert-murray-toCqTyxsT4Q-unsplash_qbofl1.jpg"
                    className="w-screen"
                    innerRef={videoRef}>

                </Image>
            </div>
        </CloudinaryContext>
         
        </>
      );
    }
  };
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
            {index === current && switchingElements(slide)}
          </div>
        );
      })}
    </section>
  );
};

export default VideoSlider;
