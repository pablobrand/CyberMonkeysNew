import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import video1 from "../videos/B1.mp4";
import video2 from "../videos/B1.mp4";
import video3 from "../videos/B1.mp4";
import video4 from "../videos/B1.mp4";
import video5 from "../videos/B1.mp4";
import video6 from "../videos/B1.mp4";
import { useRef } from "react";
import ReactPlayer from 'react-player'

export default function MediaVideoCard() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
          <ReactPlayer
            className='react-player fixed-bottom'
            src={video1}
            width='100%'
            height='100%'
            controls = {true}
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
          <ReactPlayer
            className='react-player fixed-bottom'
            src={video2}
            width='100%'
            height='100%'
            controls = {true}
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
          <ReactPlayer
            className='react-player fixed-bottom'
            src={video3}
            width='100%'
            height='100%'
            controls = {true}
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
          <ReactPlayer
            className='react-player fixed-bottom'
            src={video4}
            width='100%'
            height='100%'
            controls = {true}
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
          <ReactPlayer
            className='react-player fixed-bottom'
            src={video5}
            width='100%'
            height='100%'
            controls = {true}
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
          <ReactPlayer
            className='react-player fixed-bottom'
            src={video6}
            width='100%'
            height='100%'
            controls = {true}
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
