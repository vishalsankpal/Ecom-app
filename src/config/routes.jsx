import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Header from "../Components/Header/Header";
import Cart from "../Pages/Cart";
import ProductDetail from "../Pages/ProductDetail";

const RoutesConfig = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/cart" element={<Home />}></Route> */}
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
