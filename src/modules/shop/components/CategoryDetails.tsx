import styles from "modules/shop/components/CategoryDetails.module.scss";

import ProductCard from "modules/shop/components/ProductCard";

import { ShopSortSVG } from "common/components/Assets";

const CategoryDetails = () => (
  <div className={styles.categoryDetails}>
    <div className={styles.banner}>
      <img className={styles.bannerImage} src="/image/shop-dummy-banner1.png" alt="Banner" />
      <div className={styles.bannerTitle}>POTTERY</div>
    </div>
    <div className={styles.content}>
      <div className={styles.sorter}>
        low price
        <ShopSortSVG className={styles.sorterIcon} />
      </div>
      <ProductCard name="Wide Shirts (blue)" price={169000} imageURL="/image/shop-dummy-product1.png" />
      <ProductCard name="Comfort Shirts" price={169000} imageURL="/image/shop-dummy-product2.png" />
      <ProductCard name="Comfort Shirts" price={169000} imageURL="/image/shop-dummy-product3.png" />
      <ProductCard name="Button Down Shirts (olive)" price={169000} imageURL="/image/shop-dummy-product4.png" />
    </div>
  </div>
);

export default CategoryDetails;
