import { useContext } from "react";
import { providerProduct } from "./productContext";

export function Cartproduct({ amount }) {
  const products = useContext(providerProduct);

  const getProductName = (productId) => {
    const product = products.find((p) => p.id === productId);
    console.log(product);
    return product ? product.Product : "Produto não encontrado";
  };

  return (
    <>
      <h2>Carrinho:</h2>
      <ul>
        {Object.keys(amount).map((productId) => (
          <li key={productId}>
            {getProductName(productId)}: {amount[productId]}
          </li>
        ))}
      </ul>
    </>
  );
}
