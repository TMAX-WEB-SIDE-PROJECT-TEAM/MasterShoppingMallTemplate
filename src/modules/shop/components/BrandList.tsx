import classNames from "classnames";

import styles from "modules/shop/components/BrandList.module.scss";

interface BrandListProps {
  brands: Array<string>;
  selectedBrand: string;
  setSelectedBrand: (value: string) => void;
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: BrandListProps) => (
  <div className={styles.brandList}>
    Brand
    <div className={styles.content}>
      {brands.map(brand => (
        <button
          className={classNames(styles.button, { [styles.isSelected]: brand === selectedBrand })}
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
);

export default BrandList;
