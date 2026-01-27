import { Header } from "../components/Header.jsx";
import "../../styles/pages/NotFoundPage.css";
export function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="notFoundMsg">
        <h1 className="errorCode">
          404
        </h1>
        <p className="errorMessage">
          Sorry pal, the page you requested was not found
        </p>
      </div>
    </>
  );
}
