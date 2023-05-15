import { useState } from "react";

const ItemCount = ({ stock, inicio, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicio);
  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div>
        <button className="btn btn-warning" onClick={decrementar}>
          {" "}
          -{" "}
        </button>
        <h4>{cantidad}</h4>
        <button className="btn btn-warning" onClick={incrementar}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => onAdd(cantidad)}
          disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
