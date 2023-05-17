import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({
  id,
  nombre,
  marca,
  categoria,
  detalle,
  precio,
  imagen,
  stock,
}) => {
  const [quantityAdded, SetQuantityAdded] = useState(0);
  const handleOnAdd = (quantity) => {
    SetQuantityAdded(quantity);
  };
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={"../img/" + imagen}
            className="img-fluid rounded-start"
            alt={nombre}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Marca: {marca}</p>
            <p className="card-text">{detalle}</p>
            <p className="card-text">Precio: $ {precio}</p>
          </div>
        </div>
      </div>
      {quantityAdded > 0 ? (
        <Link to="/cart" className="Option">
          Terminar compra{" "}
        </Link>
      ) : (
        <ItemCount inicio={1} stock={stock} onAdd={handleOnAdd} />
      )}
    </div>
  );
};

export { ItemDetail };
