import { providerProduct } from "./productContext";
import { useProductGet } from "./useProductGet";

export function ProviderProduct({ children }) {
  const products = useProductGet();
  return (
    <providerProduct.Provider value={products}>
      {children}
    </providerProduct.Provider>
  );
}
