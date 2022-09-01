import { useState } from "react";

import BrandList from "modules/shop/components/BrandList";
import BrandPreview from "modules/shop/components/BrandPreview";
import styles from "modules/shop/components/Shop.module.scss";

const brands = ["Pottery", "grds", "Potter"];

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState("Pottery");

  return (
    <div className={styles.shop}>
      <BrandList brands={brands} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
      <BrandPreview />
    </div>
  );
};

export default Shop;
