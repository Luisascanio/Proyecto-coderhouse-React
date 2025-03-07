import { Box, TextField, Button } from "@mui/material";
 import { useState } from "react";


const Checkout = () => {

   const [user, setUser ] = useState({
    nombre:"",
    email:"",
    telefono:"",
    direccion:"",
  


   });

   const finalizarcompra = (evento) =>{
    evento.preventDefault()
    console.log(user)
   };

  const catchdata = (evento) =>{
   
     const {value,id} = evento.target;
    setUser ({...user, [id]:value});

  }
   



  return (
    <div>
      <h1>Ingresa tus datos para pagar</h1>
      
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
  
    </div>
  );
};

export default Checkout;
