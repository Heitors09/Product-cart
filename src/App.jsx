import "./App.css";
import { ProviderProduct } from "./ProviderProduct";
import { ShowProducts } from "./ShowProducts";

function App() {
  return (
    <ProviderProduct>
      <ShowProducts />
    </ProviderProduct>
  );
}

export default App;
