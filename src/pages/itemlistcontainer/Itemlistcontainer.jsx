import { useState, useEffect } from "react";
import "./itemlistcontainer.css";
import { products } from "../../products";
import Cardproducts from "../../common/cardproducts/Cardproducts";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(name ? products.filter((item) => item.category === name) : products);
  }, [name]);

  return (
    <div>
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
    </div>
  );
};

export default ItemListContainer;
