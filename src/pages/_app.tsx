/**
 * Next.js가 모든 페이지에 자동으로 씌우는 최상위 컴포넌트를 정의합니다.
 * pages에 정의한 컴포넌트들은, 아래의 <App>에서 <Component> 부분에 들어가게 됩니다.
 *
 * 아래와 같은 것들을 사용할 때 이 파일을 사용하면 됩니다.
 * - 전역적인 CSS import
 * - 상태 관리 도구(Recoil, Redux, ...)의 최상위 컴포넌트 (ex. RecoilRoot)
 * - 모든 페이지에 고정적으로 들어가는 컴포넌트 (ex. Header, Footer)
 * - ...
 *
 * 참고: https://nextjs.org/docs/advanced-features/custom-app
 */

import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";

import Layout from "modules/layout/components/Layout";
import "common/styles/Global.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
);

export default App;
