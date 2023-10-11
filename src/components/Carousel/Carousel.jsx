import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.scss";

const CarouselPage = () => {
  return (
    <Carousel
      autoPlay
      interval="3000"
      axis="horizontal"
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      className={styles.carousel}
    >
      <div className="carouselpics">
        <img src="https://images.unsplash.com/photo-1597633125184-9fd7e54f0ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>

    // make own carousel implementation
    // setInterval to have it scroll
  );
};

export default CarouselPage;
