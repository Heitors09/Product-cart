import { useContext } from "react";
import { providerProduct } from "./productContext";

export function Cartproduct({ amount }) {
  const products = useContext(providerProduct);
  console.log(amount);
  const getProduct = (productId) => {
    const product = products.find((products) => products.id === productId);

    return product ? product.Product : "Produto não encontrado";
  };
  console.log(products);
  return (
    <>
      <h2>Carrinho:</h2>
      <ul>
        {Object.keys(amount).map((productId) => (
          <li key={productId}>
            {getProduct(parseInt(productId, 10))}: {amount[productId]}
          </li>
        ))}
      </ul>
    </>
  );
}
