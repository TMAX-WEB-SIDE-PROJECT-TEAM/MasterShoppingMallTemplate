import { ReactNode } from "react";

import styles from "modules/shop/components/ProductCard.module.scss";

interface ProductCardProps {
  name: string;
  price: number;
  imageURL: string;
}

const ProductCard = ({ name, price, imageURL }: ProductCardProps) => (
  <div className={styles.productCard}>
    <div>{name}</div>
    <img className={styles.imageArea} src={imageURL} alt={name} />
    <div className={styles.price}>KRW {price}</div>
  </div>
);

export default ProductCard;
