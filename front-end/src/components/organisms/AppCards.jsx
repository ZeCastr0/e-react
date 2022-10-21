import CamisaSupremeBranca from "../../imgs/Camisa Supreme Branca.png.png";
import CamisetaSantaCruz from "../../imgs/camisa santacruz.png.png";
import CamisaThreasher from "../../imgs/camisa threasher.png";
import CamisaVisllAazul from "../../imgs/camisa-vislla-azul.png.png";
import mangalongaillusionpreta from "../../imgs/mangalongaillusionpreta.png.png";
import mangalongacinza from "../../imgs/mangalongacinza.png.png";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddInCart from "../../imgs/cart-plus.svg";

export default function MediaCard() {
  return (
    <div className="container-fluid">
      <div className="cards justify-content-center ">
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisetaSantaCruz}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaThreasher}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaSupremeBranca}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaVisllAazul}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={mangalongaillusionpreta}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={mangalongacinza}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisetaSantaCruz}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaThreasher}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaSupremeBranca}
            alt="green iguana"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Share
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
