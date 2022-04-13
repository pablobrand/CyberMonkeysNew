import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MediaImageCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="1"
            component="img"
            height="140"
            image="https://www.everythingreptiles.com/wp-content/uploads/2020/05/Green-Iguana-Feature.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="2"
            component="img"
            height="140"
            image="https://www.petmd.com/sites/default/files/green-iguana.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="3"
            component="img"
            height="140"
            image="https://as1.ftcdn.net/v2/jpg/03/43/05/06/500_F_343050655_bcMR9owkF0nFXX65AUPMDKbRPBdXxncO.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="4"
            component="img"
            height="140"
            image="https://cdn.pixabay.com/photo/2013/12/03/17/54/iguana-223157__340.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="5"
            component="img"
            height="140"
            image="https://www.costarica.com/contentAsset/resize-image/695e7464-c5e2-4ea9-8f06-7a86f02dafae/fileAsset/w/1000/.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="6"
            component="img"
            height="140"
            image="https://blog.ferplast.com/wp-content/uploads/2015/06/immagine-copertina-iguana.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="7"
            component="img"
            height="140"
            image="https://www.everythingreptiles.com/wp-content/uploads/2020/05/Green-Iguana-Feature.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="8"
            component="img"
            height="140"
            image="https://www.everythingreptiles.com/wp-content/uploads/2020/05/Green-Iguana-Feature.jpg"
            alt="green iguana"
          />
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
