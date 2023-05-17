import { Item } from "../Item/item";

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export { ItemList };
