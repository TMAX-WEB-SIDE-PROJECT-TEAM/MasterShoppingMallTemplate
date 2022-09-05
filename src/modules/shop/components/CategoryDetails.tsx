import styles from "modules/shop/components/CategoryDetails.module.scss";

import DummyBanner1 from "modules/shop/assets/DummyBanner1.svg";
import DummyProduct1 from "modules/shop/assets/DummyProduct1.svg";
import DummyProduct2 from "modules/shop/assets/DummyProduct2.svg";
import DummyProduct3 from "modules/shop/assets/DummyProduct3.svg";
import DummyProduct4 from "modules/shop/assets/DummyProduct4.svg";
import ProductCard from "modules/shop/components/ProductCard";

const CategoryDetails = () => (
  <div className={styles.categoryDetails}>
    <div className={styles.banner}>
      <DummyBanner1 />
      <div className={styles.bannerTitle}>POTTERY</div>
      <div className={styles.content}>
        <div className={styles.sorter}>low price</div>
        <ProductCard name="Wide Shirts (blue)" price={169000} image={<DummyProduct1 />} />
        <ProductCard name="Comfort Shirts" price={169000} image={<DummyProduct2 />} />
        <ProductCard name="Comfort Shirts" price={169000} image={<DummyProduct3 />} />
        <ProductCard name="Button Down Shirts (olive)" price={169000} image={<DummyProduct4 />} />
      </div>
    </div>
  </div>
);

export default CategoryDetails;
