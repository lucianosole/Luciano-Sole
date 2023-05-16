import { useEffect } from "react";
import { useState } from "react";
import { getProductById } from "../../Products/asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);
  const {itemId} = useParams()

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...products} />
    </div>
  );
};

export { ItemDetailContainer };
