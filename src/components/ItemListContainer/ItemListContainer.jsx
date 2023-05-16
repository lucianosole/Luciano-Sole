import { useEffect } from "react";
import { useState } from "react";
import { getProductByCategory, getProducts } from "../../Products/asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProdutcs] = useState([]);
  
  const {categoria} = useParams()

  useEffect(() => {
    const asyncFunc = categoria ? getProductByCategory : getProducts

    asyncFunc(categoria)
      .then(response => {
        setProdutcs(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoria]);

  return (
    <div>
      <br />
      <h1 className="display-5">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;