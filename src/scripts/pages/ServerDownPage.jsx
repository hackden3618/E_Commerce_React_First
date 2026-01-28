import { Header } from "../components/Header.jsx";
import "../../styles/pages/NotFoundPage.css";
export function ServerDownPage({cart}) {
  return (
    <>
      <Header cart={cart} />
      <div className="notFoundMsg">
        <h1 className="errorCode">
          500
        </h1>
        <p className="errorMessage">
          Sorry pal, uhh, we have a problem with the server, we probably are working on it as you see this
        </p>
      </div>
    </>
  );
}
