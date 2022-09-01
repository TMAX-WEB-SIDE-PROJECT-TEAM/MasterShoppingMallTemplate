import WrappedLink from "common/components/WrappedLink";
import styles from "modules/shop/components/BrandPreview.module.scss";

import DummyBrand1 from "modules/shop/assets/DummyBrand1.svg";

const categories = ["T-Shirts", "Pants", "Jacket", "Shirts"];

const BrandPreview = () => (
  <div className={styles.brandPreview}>
    <div className={styles.weeklyBest}>
      <DummyBrand1 />
      <div className={styles.weeklyBestTitle}>Weekly Best</div>
    </div>
    <div className={styles.categoryTitle}>Category</div>
    <div className={styles.categoryGrid}>
      {categories.map(category => (
        <div className={styles.categoryCell} key={category}>
          <WrappedLink className={styles.categoryLink}>{category}</WrappedLink>
        </div>
      ))}
    </div>
  </div>
);

export default BrandPreview;
