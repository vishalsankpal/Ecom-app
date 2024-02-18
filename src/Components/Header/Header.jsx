import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartPageContext } from "../../Context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartPageContext);
  return (
    <header>
      <div className="logo">
        <Link to="/home">ECOM</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">{cartItems.length}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
