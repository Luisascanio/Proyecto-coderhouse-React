import { useState, useEffect } from "react";
import "./itemlistcontainer.css";
import Cardproducts from "../../common/cardproducts/Cardproducts";
import { useParams } from "react-router";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Box, CircularProgress } from "@mui/material";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const coleccionDeProductos = collection(db, "products");
    let consulta = coleccionDeProductos;

    if (name) {
      const coleccionFiltrada = query(
        coleccionDeProductos,
        where("category", "==", name)
      );
      consulta = coleccionFiltrada;
    }

    const getProducts = getDocs(consulta);

    getProducts.then((res) => {
      let newArray = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(newArray);
      setIsLoading(false); 
    });
  }, [name]);

  return (
    <div>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", 
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <h1>Hamburguesas Bash</h1>
          <div className="itemlistcontainer">
            {items.map((product) => (
              <Cardproducts
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                description={product.description}
                category={product.category}
                stock={product.stock}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
