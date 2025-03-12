import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Button } from "@mui/material";

export const Cart = () => {
  const { ResetCart, cart, RemoveCart, TotalAmount } = useContext(CartContext);

  let total = TotalAmount()

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>{elemento.price}</h2>
            <Button onClick={() => RemoveCart(elemento.id)} variant="text">
              eliminar
            </Button>

            <h2> cantidad:{elemento.quantity}</h2>
          </div>
        );
      })}
      <h2>el totar a pagar es {total}</h2>
      <Button onClick={ResetCart} variant="contained">
        Vaciar Carrito
      </Button>

      <Button variant="contained">
        <Link to="/checkout">finalizar Compra</Link>
      </Button>
    </div>
  );
};
