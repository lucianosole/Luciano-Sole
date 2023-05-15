import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../../Products/asyncMock";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProdutcs] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProdutcs(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <br />
      <h1 className="display-5">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;