import Itemlistcontainer from "./pages/itemlistcontainer/Itemlistcontainer";
import Navbar from "./layouts/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Itemdetail } from "./pages/itemdetail/Itemdetail";
import { Cart } from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "sonner";

function app() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Toaster richColors={true}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Itemlistcontainer />} />
        <Route path="/itemdetail/:id" element={<Itemdetail />} />
        <Route path="/category/:name" element={<Itemlistcontainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
     </CartContextProvider> 
    </BrowserRouter>
  );
}

export default app;
