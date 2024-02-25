import { useContext } from "react";
import { CartPageContext } from "../Context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    numberQty,
    removeProduct,
    cartTotal,
    tax,
  } = useContext(CartPageContext);
  console.log(cartItems);
  return (
    <CartPageWrapper>
      <CartPageRow>
        <CartPageLeftColumn>
          <ListWrapper>
            {cartItems &&
              cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <div>
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h2>{item.title}</h2>
                      </Link>
                      <div>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                        <input
                          type="number"
                          min={1}
                          value={item.qty}
                          // onChange={(e) =>
                          //   numberQty(item.id, Number(e.target.value))
                          // }
                        />
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                      </div>
                      <h4>
                        <span>Cost:</span>
                        {item.qty * item.price}
                      </h4>
                      <button onClick={() => removeProduct(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ListWrapper>
        </CartPageLeftColumn>
        <CartPageRightColumn>
          <div>
            {cartItems.length > 0 && (
              <ul>
                <li>
                  SubTotal <span>{cartTotal}</span>
                </li>
                <li>
                  Total <span>{tax}</span>
                </li>
              </ul>
            )}
            <button>Proceed to checkout</button>
          </div>
        </CartPageRightColumn>
      </CartPageRow>
    </CartPageWrapper>
  );
};

export default Cart;
const CartPageWrapper = styled.div``;
const CartPageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CartPageLeftColumn = styled.div`
  flex: 0 0 75%;
  padding-right: 15px;
`;
const CartPageRightColumn = styled.div`
  flex: 0 0 25%;
  padding-left: 15px;
`;
const ListWrapper = styled.ul`
  list-style: none;
  padding: none;
`;
