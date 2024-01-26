import { providerProduct } from "./productContext";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const URL = "https://jefavregilfsuuoksocr.supabase.co";
const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplZmF2cmVnaWxmc3V1b2tzb2NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMTY4NjIsImV4cCI6MjAyMTc5Mjg2Mn0.8yIAg_m-_y81JhuL7cCgIWKlV3hmkEC9h0auArKhjZA";
const database = createClient(URL, KEY);

export function ProviderProduct({ children }) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function productGet() {
      try {
        const { data, error } = await database.from("Products").select("*");
        if (data) {
          setproducts(data);
        }
      } catch (error) {
        console.error("Ocorreu o seguinte erro: ", error.message);
      }
    }

    productGet();
  }, []);

  return (
    <providerProduct.Provider value={products}>
      {children}
    </providerProduct.Provider>
  );
}
