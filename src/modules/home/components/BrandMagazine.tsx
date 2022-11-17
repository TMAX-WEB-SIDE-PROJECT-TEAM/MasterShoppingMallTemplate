import ProductCard, { ProductCardProps } from "modules/shop/components/ProductCard";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import styles from "modules/home/components/BrandMagazine.module.scss";

/**
 * [TODO]? 문법 없앨것 더미데이터 삭제이후
 * product는 5개 받아올것
 */
interface BrandMagazineProps {
  magazineMarkdownText?: string;
  products?: ProductCardProps[];
}
/**
 * 브랜드 Magazine을 랜더링 하는 컴포넌트
 * 리액트 마크다운으로 props로 받아온 마크다운문법 텍스트를 랜더링
 */

const testText = `# Pottery
![](https://ptry.co.kr/web/product/extra/big/202201/b8a84d305841defcdb1cea8e04fab7a8.jpg)
`;

const renderers = {
  //This custom renderer changes how images are rendered
  //we use it to constrain the max width of an image to its container
  image: ({ alt, src, title }: { alt?: string; src?: string; title?: string }) => (
    <img alt={alt} src={src} title={title} style={{ maxWidth: 475 }} />
  ),
};

const BrandMagazine = ({ magazineMarkdownText, products }: BrandMagazineProps) => (
  <div className={styles.magazineParent}>
    <div className={styles.magazineRead}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.magazineRead}>
        {testText}
      </ReactMarkdown>
    </div>
    <div className={styles.productCardWrapper}>
      <ProductCard name="Wide Shirts (blue)" price={169000} imageURL="/image/shop-dummy-product1.png" />
      <ProductCard name="Comfort Shirts" price={169000} imageURL="/image/shop-dummy-product2.png" />
      <ProductCard name="Comfort Shirts" price={169000} imageURL="/image/shop-dummy-product3.png" />
      <ProductCard name="Button Down Shirts (olive)" price={169000} imageURL="/image/shop-dummy-product4.png" />
    </div>
  </div>
);

export default BrandMagazine;
