import React, { useContext } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import { BagsContext } from "../../context/BagContextProvider";
import ProductList from "../../containers/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const { bags } = useContext(BagsContext);
  return (
    <>
      <Header />
      <Carousel />
      <main>{bags.length > 0 && <ProductList bags={bags} />}</main>
      <Footer />
    </>
  );
};

export default HomePage;
