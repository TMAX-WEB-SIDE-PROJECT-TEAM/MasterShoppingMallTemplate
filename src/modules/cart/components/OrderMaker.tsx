import SectionTitle from "modules/cart/components/SectionTitle";

import styles from "modules/cart/components/OrderMaker.module.scss";
import { CartDropdownSVG } from "common/components/Assets";

const OrderMaker = () => (
  <div className={styles.orderMaker}>
    <SectionTitle>결제하기</SectionTitle>
    <div className={styles.orderMakerContent}>
      <div className={styles.orderSubsection}>
        <div className={styles.orderSubsectionTitle}>배송지</div>
        <button className={styles.orderSubsectionButton}>변경</button>
      </div>
      <div className={styles.shippingSubsection}>
        <div className={styles.shippingNickname}>자취방</div>
        <div className={styles.shippingAddress}>경기도 용인시 용구대로 2787번길 13-1 A동 303호</div>
        <div className={styles.shippingPhone}>이동호 010-9624-XXXX</div>
        <div className={styles.shippingDefault}>
          <button className={styles.shippingDefaultButton}>✓</button>
          <span className={styles.shippingDefaultLabel}>기본 배송지로 저장</span>
        </div>
      </div>
      <div className={styles.shippingRequest}>
        <select>
          <option>배송시 요청사항을 선택해주세요</option>
        </select>
        <CartDropdownSVG />
      </div>
      <div className={styles.orderSubsection}>
        <div className={styles.orderSubsectionTitle}>주문자</div>
      </div>
      <div className={styles.orderSubsection}>
        <div className={styles.orderSubsectionTitle}>주문상품</div>
      </div>
      <div className={styles.orderSubsection}>
        <div className={styles.orderSubsectionTitle}>결제 수단</div>
      </div>
    </div>
  </div>
);

export default OrderMaker;
