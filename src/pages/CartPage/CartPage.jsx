import React from "react";
import CartHeading from "../../components/CartHeading/CartHeading";
import styles from "./CartPage.module.scss";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
  return (
    <div>
      <CartHeading />
      <Cart />
    </div>
  );
};

export default CartPage;
