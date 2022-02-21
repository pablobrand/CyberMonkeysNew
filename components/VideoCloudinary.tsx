import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
const VideoPlayer = () => {
    const videoRef = useRef();
    return (
        <CloudinaryContext cloud_name="cybermonkeysllc">
            <div>
                <Video
                    publicId="CyberMonkeys/promo_cibermonkeys_espanol1920x1080_cygtd6"
                    controls
                    innerRef={videoRef}>

                </Video>
            </div>
        </CloudinaryContext>
    );
};
export default VideoPlayer;