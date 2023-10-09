import React from "react";
import CartHeading from "../../components/CartHeading/CartHeading";
import CartList from "../../containers/CartList/CartList";
import TotalBox from "../../components/TotalBox/TotalBox";
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
