import WrappedLink from "common/components/WrappedLink";
import styles from "modules/shop/components/BrandPreview.module.scss";

import { routes } from "common/Routes";

const categories = ["T-Shirts", "Pants", "Jacket", "Shirts"];

const BrandPreview = () => (
  <div className={styles.brandPreview}>
    <div className={styles.weeklyBest}>
      <img className={styles.weeklyBestImage} src="/image/shop-dummy-brand1.png" alt="Weekly best" />
      <div className={styles.weeklyBestTitle}>Weekly Best</div>
    </div>
    <div className={styles.categoryTitle}>Category</div>
    <div className={styles.categoryGrid}>
      {categories.map(category => (
        <div className={styles.categoryCell} key={category}>
          <WrappedLink className={styles.categoryLink} href={routes.shop.categoryDetails}>
            {category}
          </WrappedLink>
        </div>
      ))}
    </div>
  </div>
);

export default BrandPreview;
