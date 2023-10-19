import React from "react";
import styles from "./Favourited.module.scss";

const Favourited = () => {
  return (
    <div>
      <img className={styles.star} src="false star.png" alt="empty star" />
      {/* <a target="_blank" href="https://icons8.com/icon/8ggStxqyboK5/star">
        Star
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a> */}
    </div>
  );
};

export default Favourited;
