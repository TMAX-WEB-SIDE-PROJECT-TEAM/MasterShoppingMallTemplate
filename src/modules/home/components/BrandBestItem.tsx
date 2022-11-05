import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import BestItemCard from "modules/home/components/BestItemCard";
import styles from "modules/home/components/BrandBestItem.module.scss";

const BrandBestItem = () => (
  <div className={styles.brandBestItem}>
    <Swiper spaceBetween={450}>
      <SwiperSlide className={styles.brandBestItemSwiperSlide}>
        <BestItemCard name="Rugby Polo Knit (Brown)" price={259000} imageURL="/image/bestitem-dummy-1.png" />
      </SwiperSlide>
      <SwiperSlide className={styles.brandBestItemSwiperSlide}>
        <BestItemCard name="V-Neck Knit (Dark Navy)" price={229000} imageURL="/image/bestitem-dummy-2.png" />
      </SwiperSlide>
      <SwiperSlide className={styles.brandBestItemSwiperSlide}>
        <BestItemCard name="Melton Wool Pea Coat (Black)" price={639000} imageURL="/image/bestitem-dummy-3.png" />
      </SwiperSlide>
      <SwiperSlide className={styles.brandBestItemSwiperSlide}>
        <BestItemCard name="B-3 Leather Jacket (Black)" price={1580000} imageURL="/image/bestitem-dummy-4.png" />
      </SwiperSlide>
      <SwiperSlide className={styles.brandBestItemSwiperSlide}>
        <BestItemCard name="Comfort Shirt (Silver)" price={169000} imageURL="/image/bestitem-dummy-5.png" />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default BrandBestItem;
