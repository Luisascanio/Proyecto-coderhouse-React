import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

import "./cardproducts.css";

const Cardproducts = ({ title, price, id, imageUrl, description }) => {
  return (
    <div>
      <Card sx={{ MaxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageUrl}
          title={title}
          description={description}
          id={id}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemdetail/${id}`}>
            <Button variant="contained">Ver Detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cardproducts;
