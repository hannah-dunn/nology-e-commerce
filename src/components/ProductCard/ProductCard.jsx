import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ bags }) => {
  return (
    <div className={styles.card}>
      <img src={bags.image} alt={bags.name} />
      <h2>{bags.name}</h2>
      <h3>{bags.cost}</h3>
      <Link to={bags.id}>Click Here To See More</Link>
    </div>
  );
};

export default ProductCard;
