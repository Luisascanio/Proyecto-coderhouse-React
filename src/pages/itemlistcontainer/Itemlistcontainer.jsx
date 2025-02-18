import "./itemlistcontainer.css";
import { products } from "../../products";
import Cardproducts from "../../common/cardproducts/Cardproducts";

const itemlistcontainer = () => {
  return (
    <div >
      <h1>Hamburguesas bash</h1>
      <div className="itemlistcontainer">
      {products.map((product) => {
        return (
          <Cardproducts
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            description={product.description}
          />
        );
      })}
      </div>
    </div>
  );
};

export default itemlistcontainer;
