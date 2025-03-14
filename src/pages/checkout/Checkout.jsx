import { Box, TextField, Button } from "@mui/material";

 import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";


const Checkout = () => {
  const { cart, TotalAmount, ResetCart } = useContext(CartContext);
  // const [isLoading, setIsLoading] = useState(false);
   const [user, setUser ] = useState({
    nombre:"",
    email:"",
    telefono:"",
    direccion:"",
  


   });

   const [orderId, setOrderId] = useState(null);

   const finalizarcompra = (evento) =>{
    evento.preventDefault()
    // setIsLoading(true);
    // orden = { comprador ---> nombre , email, telefono , items ---> array de products,
    //  total ---> el numero total a pagar }
    let total = TotalAmount();
    let order = {
      buyer: user,
      items: cart,
      total: total,
   };


   let refCollection = collection(db, "orders");
    const promiseResponse = addDoc(refCollection, order);
    promiseResponse
      .then((res) => {
        setOrderId(res.id);
        ResetCart();
        // setIsLoading(false);
      })
      .catch((error) => console.log({ error }));

    let productsCollection = collection(db, "products");

    order.items.forEach((item) => {
      let productRef = doc(productsCollection, item.id);
      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  }
  const catchdata = (evento) =>{
   
     const {value,id} = evento.target;
    setUser ({...user, [id]:value});

  }
   



  return (
    <div>
      <h1>Ingresa tus datos para pagar</h1>

      {orderId ?(
        <h2>gracias por tu compra tu recibo es: {orderId}</h2>
      ) : (



        <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5rem",
          "& .MuiTextField-root": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={finalizarcompra}
      >
        <TextField id="nombre" label="Nombre" variant="outlined" onChange={catchdata} />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="Email"
          onChange={catchdata}
        />
        <TextField
          id="telefono"
          label="Telefono"
          variant="outlined"
          type="number"
          
          onChange={catchdata}
        />
        <TextField id="direccion" label="Direccion" variant="outlined" type="text" onChange={catchdata} />

        <Box sx={{ m: 1, width: "60ch" }}>
          <Button  type="submit" size="large" variant="contained" fullWidth>
            Enviar
          </Button>
        </Box>
      </Box>


      )
    }
     
  
    </div>
  );
}

export default Checkout;
