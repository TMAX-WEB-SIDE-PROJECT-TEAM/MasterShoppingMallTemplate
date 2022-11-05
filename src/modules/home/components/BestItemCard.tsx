import { ReactNode } from "react";

import styles from "modules/home/components/BestItemCard.module.scss";

export interface BestItemCardProps {
  name: string;
  price: number;
  imageURL: string;
}

const BestItemCard = ({ name, price, imageURL }: BestItemCardProps) => (
  <div className={styles.bestItemtCard}>
    <div>{name}</div>
    <img className={styles.imageArea} src={imageURL} alt={name} />
    <div className={styles.price}>KRW {price}</div>
  </div>
);

export default BestItemCard;
