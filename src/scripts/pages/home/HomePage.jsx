import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Header } from "../../components/Header.jsx";
import "../../../styles/pages/HomePage.css";
import { ProductsGrid } from "./ProductsGrid.jsx";

export function HomePage({ cart, loadCart }) {

  const [searchParams] = useSearchParams()
  const search = searchParams.get("search")
  const [products, setProducts] = useState([]);

  let productsUrl;

  if (search) {
    productsUrl = `/api/products?search=${search}`;
  } else {
    productsUrl = `/api/products`;
  }

  useEffect(() => {
    async function getProducts() {
      const productsResponse = await
        axios.get(productsUrl);
      setProducts(productsResponse.data);
    }
    getProducts();
  }, [productsUrl]);


  return (
    <>
      <link rel="icon" type="icon" href="/favicons/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
