import Itemlistcontainer from "./pages/itemlistcontainer/Itemlistcontainer";
import Navbar from "./layouts/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";

import { Itemdetail } from "./pages/itemdetail/Itemdetail";

function app() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Itemlistcontainer />} />
        <Route path="/itemdetail/:id" element={<Itemdetail />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default app;
