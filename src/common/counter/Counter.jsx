import Button from "@mui/material/Button";
import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < 15) {
      setContador(contador + 1);
    } else {
      alert("stock maximo ");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("minimo 1 producto");
    }
  };

  const onAdd = () => {
    console.log("agregar al carrito");
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
