import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = ({ bags }) => {
  return (
    <section className={styles.grid}>
      <h3>There are {bags.length} items in stock</h3>
      <div className={styles.container}>
        {bags.map((bags) => (
          <ProductCard key={bags.id} bags={bags} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
