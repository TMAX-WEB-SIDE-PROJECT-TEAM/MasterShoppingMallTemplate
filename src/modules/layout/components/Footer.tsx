import { ReactNode } from "react";

import { routes } from "common/Routes";
import WrappedLink from "common/components/WrappedLink";
import styles from "modules/layout/components/Footer.module.scss";

import { FooterCartSVG, FooterHomeSVG, FooterMeSVG, FooterNotiSVG, FooterShopSVG } from "common/components/Assets";

const Footer = () => (
  <div className={styles.footer}>
    <Item icon={<FooterHomeSVG />} title="Home" url={routes.home.index} />
    <Item icon={<FooterShopSVG />} title="Shop" url={routes.shop.index} />
    <Item icon={<FooterCartSVG />} title="Cart" url={routes.cart.index} />
    <Item icon={<FooterNotiSVG />} title="Noti" url={routes.noti.index} />
    <Item icon={<FooterMeSVG />} title="Me" url={routes.me.index} />
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
