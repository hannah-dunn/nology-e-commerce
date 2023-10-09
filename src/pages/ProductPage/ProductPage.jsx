import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getBagById } from "../../services/bags-database-service";
import styles from "./ProductPage.module.scss";
import { CartContext } from "../../context/CartContextProvider";

const ProductPage = () => {
  const { id } = useParams();
  const [bags, setBags] = useState(null);
  const [error, setError] = useState(null);
  const { cartItems, addToCart } = useContext(CartContext);

  useEffect(() => {
    getBagById(id)
      .then((bags) => setBags(bags))
      .catch((error) => setError(error));
  }, [id]);

  return (
    <main className={styles.individual}>
      {bags && (
        <>
          <h1>{bags.name}</h1>
          <h2>
            {bags.style}, {bags.shape}
          </h2>

          {/* need to update this now */}
          {/* <p>{bags.quantity} in stock</p> */}

          <h2>${bags.cost}</h2>
          <button onClick={() => addToCart(bags)}>Add to cart</button>
          <img src={bags.image} alt={bags.name} />
        </>
      )}
      {error && <p>Cannot find product with ID: {id}</p>}
    </main>
  );
};

export default ProductPage;
