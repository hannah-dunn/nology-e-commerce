import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.scss";

const CarouselPage = () => {
  return (
    <div className={styles.carousel}>
      <Carousel
        autoPlay
        interval="3000"
        axis="horizontal"
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        <div className="carouselpics">
          <img src="https://images.unsplash.com/photo-1597633125184-9fd7e54f0ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" />
          {/* <img src="./assests/pictures/redbag-medium.jpg" /> */}
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" />
        </div>
      </Carousel>
      <div className={styles.ad}>
        <h3>Sale Sale Sale</h3>
        <p>
          Life’s short, buy the bag – after all, you can never have too many.
          Crossbody, bucket, shopper, slouch shapes, barrel, hobo and tote,
          there’s a covetable style for every mood (and outfit).
          <br />
          <br />
          Get 30% off using code FIRESALE
        </p>
      </div>
    </div>
  );
};

export default CarouselPage;
