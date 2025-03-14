import { useEffect, useState } from "react";
// import { products } from "../../products";
import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./itemdetail.css";
import { db } from "../../firebaseConfig";
import {  doc, getDoc, collection } from "firebase/firestore";


export const Itemdetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let productCollection = collection(db, "products");
    let refDoc = doc(productCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div className="itemDetail">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={item.imageUrl}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.description}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Counter item={item} />
    </div>
  );
};

export default Itemdetail;
