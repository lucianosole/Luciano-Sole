import { useEffect } from "react";
import { useState } from "react";
import { getProductById } from "../../Products/asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProductById("1")
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [500]);

  return (
    <div>
      <ItemDetail {...products} />
    </div>
  );
};

export { ItemDetailContainer };
