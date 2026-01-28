import { Header } from "../../components/Header.jsx";
import "../../../styles/pages/HomePage.css";
import { ProductsGrid } from "./ProductsGrid.jsx";

export function HomePage({ products, cart }) {
  return (
    <>
      <link rel="icon" type="icon" href="/favicons/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
