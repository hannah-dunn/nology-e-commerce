import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import styles from "./Cart.module.scss";
import { getBagById } from "../../services/bags-database-service";

const Cart = () => {
  const { id } = useParams();
  const [bags, setBags] = useState(null);
  const [error, setError] = useState(null);
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  useEffect(() => {
    getBagById(id)
      .then((bags) => setBags(bags))
      .catch((error) => setError(error));
  }, [id]);

  return (
    <>
      <div className={styles.Cart}>
        <div className={styles.border}>
          {cartItems.map((bags) => (
            <div key={bags.id}>
              <div>
                <img src={bags.image} alt={bags.name} />
                <div>
                  <h1>{bags.name}</h1>
                  <p>${bags.cost}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    addToCart(bags);
                  }}
                >
                  +
                </button>
                <p>{bags.quantity}</p>
                <button
                  onClick={() => {
                    removeFromCart(bags);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div>
            <h1>Total: ${getCartTotal()}</h1>
            <button
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
