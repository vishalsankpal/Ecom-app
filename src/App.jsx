import "./App.css";
import ProductPageProvider from "./Context/ProductContext";
import RoutesConfig from "./config/routes";

function App() {
  return (
    <>
      <ProductPageProvider>
        <RoutesConfig />
      </ProductPageProvider>
    </>
  );
}

export default App;
