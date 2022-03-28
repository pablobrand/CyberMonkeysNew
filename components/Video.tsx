import React from "react";

type Props = {
  logo: string;
  video: string;
};

const Vidd: React.FC<Props> = ({ logo, video }) => {
  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.play();

  const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.pause();

  return (
    <video
      autoPlay
      loop
      preload="none"
      muted
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      <source
        src={
          "https://res.cloudinary.com/cybermonkeysllc/video/upload/v1647887060/CyberMonkeys/B1_zdvhe0.mp4"
        }
        type="video/mp4"
      />
    </video>
  );
};

export default Vidd;
