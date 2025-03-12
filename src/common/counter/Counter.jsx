import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import "./counter.css";
import { CartContext } from "../../context/CartContext";

const Counter = ({item}) => {
 
  const [contador, setContador] = useState(1);
  const {addToCart} = useContext(CartContext)

  const sumar = () => {
    
    if (contador < item.stock) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("minimo 1 producto");
    }
  };
  // el carrito

  const onAdd = () => {
    let objetoParaElCarrito = { ...item, quantity: contador };
    addToCart(objetoParaElCarrito);
  };

  return (
    <div>
      <div className="counter">
        <Button onClick={restar} variant="contained">
          Restar
        </Button>
        <h2>{contador}</h2>
        <Button onClick={sumar} variant="contained">
          Sumar
        </Button>
      </div>
      <div className="counterBuy">
        <Button onClick={onAdd} variant="contained">
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};

export default Counter;
