import { useState } from "react";
import classNames from "classnames";

import BrandPreview from "modules/shop/components/BrandPreview";
import styles from "modules/shop/components/BrandList.module.scss";

const brands = ["Pottery", "grds", "Potter"];

const BrandList = () => {
  const [selectedBrand, setSelectedBrand] = useState("Pottery");

  return (
    <div className={styles.brandList}>
      <div className={styles.menu}>
        Brand
        <div className={styles.menuContent}>
          {brands.map(brand => (
            <button
              className={classNames(styles.brandButton, { [styles.isSelected]: brand === selectedBrand })}
              key={brand}
              onClick={() => {
                setSelectedBrand(brand);
              }}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
      <BrandPreview />
    </div>
  );
};

export default BrandList;
