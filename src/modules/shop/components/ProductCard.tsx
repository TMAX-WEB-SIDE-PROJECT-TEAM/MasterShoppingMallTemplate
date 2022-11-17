import { routes } from "common/Routes";
import WrappedLink from "common/components/WrappedLink";
import styles from "modules/shop/components/ProductCard.module.scss";

export interface ProductCardProps {
  name: string;
  price: number;
  imageURL: string;
}

const ProductCard = ({ name, price, imageURL }: ProductCardProps) => (
  <WrappedLink className={styles.productCard} href={routes.shop.productDetail}>
    <div>{name}</div>
    <img className={styles.imageArea} src={imageURL} alt={name} />
    <div className={styles.price}>KRW {price}</div>
  </WrappedLink>
);

export default ProductCard;
