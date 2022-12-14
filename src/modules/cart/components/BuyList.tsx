import SectionTitle from "modules/cart/components/SectionTitle";

import styles, { buyDate } from "modules/cart/components/BuyList.module.scss";
import { dateToStrings } from "common/utils/MathUtils";
import { useState } from "react";

const BuyList = () => (
  <div className={styles.buyList}>
    <SectionTitle>장바구니</SectionTitle>
    <BuyItem
      date={new Date(2022, 8 - 1, 12)}
      imageURL="/image/cart-dummy-product1.png"
      brandName="pottery"
      productName="Comfort Shirts Pink"
      size={3}
      price={129000}
    />
    <BuyItem
      date={new Date(2022, 8 - 1, 11)}
      imageURL="/image/cart-dummy-product2.png"
      brandName="pottery"
      productName="Comfort Shirts Green"
      size={3}
      price={129000}
    />
    <BuyItem
      date={new Date(2022, 8 - 1, 10)}
      imageURL="/image/cart-dummy-product3.png"
      brandName="pottery"
      productName="Comfort Shirts Lavendar"
      size={3}
      price={129000}
    />
    <BuyItem
      date={new Date(2022, 8 - 1, 9)}
      imageURL="/image/cart-dummy-product2.png"
      brandName="pottery"
      productName="Comfort Shirts Green"
      size={3}
      price={129000}
    />
    <BuyItem
      date={new Date(2022, 8 - 1, 8)}
      imageURL="/image/cart-dummy-product3.png"
      brandName="pottery"
      productName="Comfort Shirts Lavendar"
      size={3}
      price={129000}
    />
    <div className={styles.buyResult}>
      <div className={styles.buyTotalPrice}>전체 금액: 258000</div>
      <button className={styles.buyBuyButton}>구매하기</button>
    </div>
  </div>
);

interface BuyItemProps {
  date: Date;
  imageURL: string;
  brandName: string;
  productName: string;
  size: number;
  price: number;
}

const BuyItem = ({ date, imageURL, brandName, productName, size, price }: BuyItemProps) => {
  const [isChecked, setChecked] = useState(false);
  const [count, setCount] = useState(1);

  const buyDateStrings = dateToStrings(date);

  const handleClickCheck = () => {
    setChecked(!isChecked);
  };

  const handleClickIncrement = () => {
    setCount(count + 1);
  };

  const handleClickDecrement = () => {
    if (count <= 1) {
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className={styles.buyItem}>
      <button className={styles.buyCheckButton} onClick={handleClickCheck}>
        {isChecked && "✓"}
      </button>
      <div className={styles.buyDate}>
        {buyDateStrings.year}. {buyDateStrings.month}. {buyDateStrings.day}
      </div>
      <div className={styles.buyContent}>
        <div className={styles.buyImageArea}>
          <img className={styles.buyImage} src={imageURL} alt="Buy" />
        </div>
        <div className={styles.buyInfo}>
          <div className={styles.buyBrandName}>{brandName}</div>
          <div className={styles.buyProductName}>{productName}</div>
          <div className={styles.buySize}>size {size}</div>
          <div className={styles.buyPrice}>
            {price}
            <div className={styles.buyCounterArea}>
              <button className={styles.buyCounterButton} onClick={handleClickIncrement}>
                +
              </button>
              <span className={styles.buyCounter}>{count}</span>
              <button className={styles.buyCounterButton} onClick={handleClickDecrement}>
                -
              </button>
            </div>
          </div>
        </div>
        <div className={styles.buyButtonsArea}>
          <button className={styles.buyBuyButton}>구매</button>
          <button className={styles.buyDeleteButton}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default BuyList;
