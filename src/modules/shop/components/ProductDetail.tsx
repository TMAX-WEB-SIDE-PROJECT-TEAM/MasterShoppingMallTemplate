import WrappedLink from "common/components/WrappedLink";
import { ShopArrowSVG, ShopStarSVG } from "common/components/Assets";
import SimpleDialog from "common/components/SimpleDialog";

import styles from "modules/shop/components/ProductDetail.module.scss";
import { range } from "common/utils/MathUtils";

const dummyReviews = [
  {
    imageURL: "/image/shop-dummy-review1.png",
    score: 5,
    title: "아주 좋아요",
    content:
      "친구한테서 추천받아서 샀는데 너무 만족스럽습니다 최고에요. 원래부터 포터리를 애용했지만, 정말 이번셔츠 색감 최고인거같습니다. 다사고싶어요.",
  },
  {
    imageURL: "/image/shop-dummy-review1.png",
    score: 5,
    title: "아주 좋아요",
    content:
      "친구한테서 추천받아서 샀는데 너무 만족스럽습니다 최고에요. 원래부터 포터리를 애용했지만, 정말 이번셔츠 색감 최고인거같습니다. 다사고싶어요.",
  },
  {
    imageURL: "/image/shop-dummy-review1.png",
    score: 5,
    title: "아주 좋아요",
    content:
      "친구한테서 추천받아서 샀는데 너무 만족스럽습니다 최고에요. 원래부터 포터리를 애용했지만, 정말 이번셔츠 색감 최고인거같습니다. 다사고싶어요.",
  },
];

const ProductDetail = () => {
  const productImageURL = "/image/shop-dummy-product1.png";
  const productSampleURL = "/image/shop-dummy-sample.png";
  const starCount = 5;

  return (
    <div className={styles.productDetail}>
      <img className={styles.imageArea} src={productImageURL} alt="product" />
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
          {range(1, starCount).map(i => (
            <ShopStarSVG className={styles.star} key={i} />
          ))}
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
      <SimpleDialog
        renderTarget={({ onClick }) => (
          <button className={styles.sampleImageButton} onClick={onClick}>
            <img className={styles.sampleImage} src={productSampleURL} alt="sample" />
          </button>
        )}
      >
        <img className={styles.sampleImage} src={productSampleURL} alt="sample" />
      </SimpleDialog>
      <div className={styles.separator} />
      <div className={styles.box}>
        <div className={styles.reviewName}>REVIEW</div>
        {dummyReviews.map((review, index) => (
          <div key={index} className={styles.review}>
            <SimpleDialog
              renderTarget={({ onClick }) => (
                <button className={styles.reviewImageButton} onClick={onClick}>
                  <img src={review.imageURL} alt="review" />
                </button>
              )}
            >
              <img className={styles.reviewDialogImage} src={review.imageURL} alt="review" />
              <div className={styles.reviewDialogMain}>
                <div className={styles.reviewDialogInfoBox}>
                  키: 180
                  <br />
                  몸무게: 70
                </div>
                {range(1, starCount).map(i => (
                  <ShopStarSVG className={styles.star} key={i} />
                ))}
                <div className={styles.reviewDialogTitle}>너무 좋아요</div>
                <div className={styles.reviewDialogContent}>
                  친구한테서 추천받아서 샀는데 너무 만족스럽습니다 최고에요. 원래부터 포터리를 애용했지만, 정말 이번셔츠
                  색감 최고인거같습니다. 다사고싶어요.
                </div>
              </div>
            </SimpleDialog>
            <div className={styles.reviewContent}>
              <div>
                <span className={styles.reviewTitle}>{review.title}</span>
              </div>
              {review.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
