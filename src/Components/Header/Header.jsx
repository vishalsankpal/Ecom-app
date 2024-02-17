import { useContext } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  // const { changeTheme } = useContext();
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
