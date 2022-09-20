import { HeaderBellSVG } from "common/components/Assets";
import styles from "modules/layout/components/Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    essence
    <Bell />
  </div>
);

const Bell = () => (
  <div className={styles.bell}>
    <HeaderBellSVG />
  </div>
);

export default Header;
