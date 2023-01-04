import { ReactNode } from "react";

import styles from "modules/cart/components/SectionTitle.module.scss";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => <div className={styles.sectionTitle}>{children}</div>;

export default SectionTitle;
