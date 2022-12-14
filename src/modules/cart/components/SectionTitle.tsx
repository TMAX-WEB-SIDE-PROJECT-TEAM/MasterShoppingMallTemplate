import styles from "modules/cart/components/SectionTitle.module.scss";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => <div className={styles.sectionTitle}>{children}</div>;

export default SectionTitle;
