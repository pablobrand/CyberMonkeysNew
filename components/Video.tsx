import React from "react";

type Props = {
  logo: string;
  video: string;
};

const Vidd: React.FC<Props> = ({ logo, video }) => {
  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.play();
    return(
        <div>
            
        </div>
    )
};

export default Vidd;
