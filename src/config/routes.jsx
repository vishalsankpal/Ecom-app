import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Header from "../Components/Header/Header";

const RoutesConfig = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/cart" element={<Home />}></Route> */}
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
