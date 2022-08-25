import { ReactNode } from "react";

import styles from "common/components/Page.module.scss";

interface PageProps {
  children: ReactNode;
}

/**
 * 페이지를 만들 때 가장 바깥에 공통적으로 씌우는 컴포넌트입니다.
 */
const Page = ({ children }: PageProps) => <div className={styles.page}>{children}</div>;

export default Page;
