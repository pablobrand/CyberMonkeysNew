import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
const VideoPlayer = () => {
    const videoRef = useRef();
    return (
        <CloudinaryContext cloud_name="cybermonkeysllc">
            <div>
                <Video
                    publicId="JoryeVera/JV_jewelry_a2jnia"
                    controls
                    innerRef={videoRef}>

                </Video>
            </div>
        </CloudinaryContext>
    );
};
export default VideoPlayer;