import { ReactNode } from "react";

import styles from "modules/shop/components/ProductCard.module.scss";

interface ProductCardProps {
  name: string;
  price: number;
  image: ReactNode;
}

const ProductCard = ({ name, price, image }: ProductCardProps) => (
  <div className={styles.productCard}>
    <div>{name}</div>
    <div className={styles.imageArea}>{image}</div>
    <div className={styles.price}>KRW {price}</div>
  </div>
);

export default ProductCard;
