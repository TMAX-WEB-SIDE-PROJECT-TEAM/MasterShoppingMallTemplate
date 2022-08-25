import { ReactNode } from "react";

import Header from "modules/layout/components/Header";
import Footer from "modules/layout/components/Footer";
import styles from "modules/layout/components/Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.layout}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
