import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartwidjet.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cartwidjet() {

  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();
  return (
    <Badge badgeContent={total} color="primary">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
}

export default Cartwidjet;
