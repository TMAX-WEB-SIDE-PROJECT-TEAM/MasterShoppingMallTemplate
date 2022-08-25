import { ReactNode } from "react";

import WrappedLink from "common/components/WrappedLink";
import styles from "modules/layout/components/Footer.module.scss";
import HomeIcon from "modules/layout/assets/HomeIcon.svg";
import ShopIcon from "modules/layout/assets/ShopIcon.svg";
import CartIcon from "modules/layout/assets/CartIcon.svg";
import NotiIcon from "modules/layout/assets/NotiIcon.svg";
import MeIcon from "modules/layout/assets/MeIcon.svg";
import { routes } from "common/Routes";

const Footer = () => (
  <div className={styles.footer}>
    <Item icon={<HomeIcon />} title="Home" url={routes.home.index} />
    <Item icon={<ShopIcon />} title="Shop" url={routes.shop.index} />
    <Item icon={<CartIcon />} title="Cart" url={routes.cart.index} />
    <Item icon={<NotiIcon />} title="Noti" url={routes.noti.index} />
    <Item icon={<MeIcon />} title="Me" url={routes.me.index} />
  </div>
);

interface ItemProps {
  icon: ReactNode;
  title: string;
  url: string;
}

const Item = ({ icon, title, url }: ItemProps) => (
  <WrappedLink className={styles.item} href={url}>
    <span className={styles.itemIcon}>{icon}</span>
    <span className={styles.itemTitle}>{title}</span>
  </WrappedLink>
);

export default Footer;
