 import { createContext  } from "react";
 import { useState } from "react";


  export const CartContext = createContext()


const CartContextProvider = ({children}) => {
 const [cart, setCart] = useState([])

 const addToCart  = (producto) => {
  setCart([...cart,producto])
    
 }
 const ResetCart = () => {
  setCart([])
 }
 const RemoveCart = (id) => {
  const NewArray = cart.filter((elemento) => elemento.id !== id)
  setCart(NewArray)
 }
const TotalAmount = () =>{
  let total = cart.reduce((acc, elemento) => {
    return acc + elemento.quantity * elemento.price;
  }, 0);
  return total;


}

const getTotalQuantity = () => {
  let total = cart.reduce((acc, elemento) => {
    return acc + elemento.quantity;
  }, 0);
  return total;
};


  
let data = {
   addToCart,
   setCart,
   cart,
   ResetCart,
   RemoveCart,
   TotalAmount,
   getTotalQuantity
 }
  
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
  
}

export default CartContextProvider