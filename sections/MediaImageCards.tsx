import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import image1 from "../images/gemstone.jpg";
import image2 from "../images/gemstone.jpg";
import image3 from "../images/gemstone.jpg";
import image4 from "../images/gemstone.jpg";
import image5 from "../images/gemstone.jpg";
import image6 from "../images/gemstone.jpg";
import image7 from "../images/gemstone.jpg";
import image8 from "../images/gemstone.jpg";
import image9 from "../images/gemstone.jpg";
import image10 from "../images/gemstone.jpg";
import image11 from "../images/gemstone.jpg";
import image12 from "../images/gemstone.jpg";
import { CardActionArea } from "@mui/material";

export default function MediaImageCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image1}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image2}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image3}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image4}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image5}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image6}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image7}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image8}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image9}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image10}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image11}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image
              src={image12}
              height={240}
              width={345}
              alt="CyberMonkeys Image"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </div>
  );
}
