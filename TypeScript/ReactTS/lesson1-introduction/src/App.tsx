import List from "./components/List";
import { productType } from "./types/productType";
import {v4 as uuid} from 'uuid';

const products: productType[] = [
  {
    id: uuid(),
    title: "Xiaomi 14",
    price: 3000,
    color: "red",
    newDevice: true,
  },
  {
    id: uuid(),
    title: "Xiaomi 13",
    price: 2000,
    color: "blue",
    newDevice: false,
  },
  {
    id: uuid(),
    title: "Xiaomi 12",
    price: 1000,
    color: "grey",
    newDevice: false,
  },
];

const App: React.FC = () => {
  return (
    <div>
      {products.map((item: any, c: number) => (
        <List key={c} newDevice={item.newDevice} id={item.id} title={item.title} price={item.price} color={item.color} />
      ))}
    </div>
  );
};

export default App;
