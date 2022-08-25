import styles from "modules/layout/components/Header.module.scss";
import BellIcon from "modules/layout/assets/BellIcon.svg";

const Header = () => (
  <div className={styles.header}>
    essence
    <Bell />
  </div>
);

const Bell = () => (
  <div className={styles.bell}>
    <BellIcon />
  </div>
);

export default Header;
