import React from "react";
import ReactPlayer from "react-player";

type Props = {
  video: string;
};

const Vidd: React.FC<Props> = ({ video }) => {
  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.play();

  const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.pause();

  return (
    <video
      style={{ height:"950px", margin: "0 auto" }}
      autoPlay
      playsInline
      loop
      muted
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      <source
        src={
          "https://res.cloudinary.com/cybermonkeysllc/video/upload/v1647887060/CyberMonkeys/B1_zdvhe0.mp4"
        }
        type="video/mp4"
        className="object-cover"
      />
    </video>
  );
};

export default Vidd;
