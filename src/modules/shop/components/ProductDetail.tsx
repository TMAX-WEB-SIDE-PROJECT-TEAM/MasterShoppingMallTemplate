import WrappedLink from "common/components/WrappedLink";
import { ShopArrowSVG, ShopStarSVG } from "common/components/Assets";

import styles from "modules/shop/components/ProductDetail.module.scss";

const ProductDetail = () => (
  <div className={styles.productDetail}>
    <img className={styles.imageArea} src="/image/shop-dummy-product1.png" alt="product" />
    <div className={styles.separator} />
    <div className={styles.box}>
      <div className={styles.row}>
        <span className={styles.brandName}>POTTERY</span>
        <ShopArrowSVG className={styles.brandIcon} />
      </div>
      <div className={styles.row}>
        <div className={styles.productName}>Wide shirts (blue)</div>
      </div>
      <div className={styles.row}>
        <ShopStarSVG className={styles.star} />
        <ShopStarSVG className={styles.star} />
        <ShopStarSVG className={styles.star} />
        <ShopStarSVG className={styles.star} />
        <ShopStarSVG className={styles.star} />
        <WrappedLink className={styles.reviewLink}>Show review (103)</WrappedLink>
      </div>
      <div className={styles.row}>169000 won</div>
    </div>
    <div className={styles.separator} />
    <div className={styles.box}>
      <div className={styles.productInfoTitle}>Product info</div>
      <div className={styles.productInfo}>
        <ul>
          <li>간편한 세탁과 건조</li>
          <li>초경량 라이트 웨이트 나일론 소재로 가벼운 착용감</li>
          <li>가장 여유로운 실루엣</li>
        </ul>
      </div>
    </div>
    <img className={styles.sampleImage} src="/image/shop-dummy-sample1.png" alt="sample" />
    <img className={styles.sampleImage} src="/image/shop-dummy-sample2.png" alt="sample" />
    <img className={styles.sampleImage} src="/image/shop-dummy-sample3.png" alt="sample" />
  </div>
);

export default ProductDetail;
