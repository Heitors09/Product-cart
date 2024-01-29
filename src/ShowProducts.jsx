import { useContext, useState } from "react";
import { providerProduct } from "./productContext";
import { Cartproduct } from "./Cart";

export function ShowProducts() {
  const products = useContext(providerProduct);
  const [amount, setamount] = useState({});

  function handleClickAdd(productId) {
    setamount((prevAmount) => ({
      ...prevAmount,
      [productId]: (prevAmount[productId] || 0) + 1,
      //cria um objeto de amount que copia os valores com spread, cria uma propiedade com o valor de productId como chave
      //checa se essa propiedade com o valor de productId existe, caso aconteça de não existir seu valor será 0 e após +1
      //se essa propiedade já tiver um valor, pega esse valor atual e acrescenta "1"
    }));
  }

  function handleClickRemove(productId) {
    if (amount[productId] > 0) {
      setamount((prevAmount) => ({
        ...prevAmount,
        [productId]: prevAmount[productId] - 1,
      }));
    }
  }

  //no h3 abaixo, pega o valor associado a consulta amount[product.id] e retorna caso não exista, virá 0
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.Product}</h1>
          <h3>{amount[product.id] || 0}</h3>
          <button onClick={() => handleClickAdd(product.id)}>+</button>
          <button onClick={() => handleClickRemove(product.id)}>-</button>
          <footer>Expira em: {product.Expiration}</footer>
        </div>
      ))}
      <Cartproduct amount={amount} />
    </>
  );
}
