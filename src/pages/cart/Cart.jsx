import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import Swal from 'sweetalert2'

export const Cart = () => {
  const { ResetCart, cart, RemoveCart, TotalAmount } = useContext(CartContext);

  let total = TotalAmount();


  const ResetCartAlert = () =>{
    Swal.fire({
      title: "Estas Seguro?",
      text: "Todos tus productos se borraran",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si Limpia el Carrito"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Listo",
          text: "Tu Carrito ha sido Limpiado.",
          icon: "success"

        });
        ResetCart()
      }
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        p: 3,
        gap: 5, // 🔹
      }}
    >
      <Box sx={{ flex: 1 }}>
        {cart.map((elemento) => (
          <Card
            key={elemento.id}
            sx={{
              display: "flex",
              maxWidth: 600,
              borderRadius: 2,
              boxShadow: 3,
              mb: 3, //
              p: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 150, objectFit: "cover" }}
              image={elemento.imageUrl}
              alt={elemento.title}
            />

            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6">{elemento.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {elemento.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cantidad: {elemento.quantity}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1, color: "green" }}>
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(elemento.price)}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={() => RemoveCart(elemento.id)}
                variant="contained"
                color="error"
              >
                Eliminar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h6">
          Total:{" "}
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(total)}
        </Typography>
        <Button
          onClick={ResetCartAlert}
          variant="contained"
          color="secondary"
          sx={{ width: 150 }}
        >
          Vaciar carrito
        </Button>
        <Button variant="contained" color="primary" sx={{ width: 150 }}>
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "white" }}
          >
            Pagar
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
