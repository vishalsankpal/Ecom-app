import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartPageContext } from "../../Context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartPageContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">{cartItems.length}</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
