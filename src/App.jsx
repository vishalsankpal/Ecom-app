import "./App.css";
import CartContextProvider from "./Context/CartContext";
import ProductPageProvider from "./Context/ProductContext";
import RoutesConfig from "./config/routes";

function App() {
  return (
    <>
      <ProductPageProvider>
        <CartContextProvider>
          <RoutesConfig />
        </CartContextProvider>
      </ProductPageProvider>
    </>
  );
}

export default App;
