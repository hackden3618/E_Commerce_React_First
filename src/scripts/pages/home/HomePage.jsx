import { Header } from "../../components/Header.jsx";
import "../../../styles/pages/HomePage.css";
import { ProductsGrid } from "./ProductsGrid.jsx";

export function HomePage() {
  return (
    <>
      <link rel="icon" type="icon" href="/favicons/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header />
      <div className="home-page">
        <ProductsGrid />
      </div>
    </>
  );
}
