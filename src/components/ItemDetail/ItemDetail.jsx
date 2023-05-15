import { ItemCount } from "../ItemCount/ItemCount";

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
  return (
    <div className="card mb-3" /* style={{'max-width: 540'}} */>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={"/img/" + imagen}
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
      <ItemCount
        inicio={1}
        stock={stock}
        onAdd={(cantidad) => console.log("Cantidad agregada", cantidad)}
      />
    </div>
  );
};

export { ItemDetail };