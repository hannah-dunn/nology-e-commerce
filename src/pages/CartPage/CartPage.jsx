import React from "react";
import CartHeading from "../../components/CartHeading/CartHeading";
import styles from "./CartPage.module.scss";
import Cart from "../../components/Cart/Cart";
import CheckoutBtn from "../../components/CheckoutBtn/CheckoutBtn";

const CartPage = () => {
  return (
    <div>
      <CartHeading />
      <Cart />
      <CheckoutBtn />
    </div>
  );
};

export default CartPage;
