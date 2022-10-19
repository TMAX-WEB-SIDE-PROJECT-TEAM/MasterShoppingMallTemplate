/**
 * Next.js가 HTML을 생성할 때 쓸 템플릿을 정의합니다.
 *
 * 아래와 같은 것들을 사용할 때 이 파일을 사용하면 됩니다.
 * - 폰트 로딩 (ex. 구글 폰트)
 * - 검색 최적화 관련 태그들 (ex. <meta> description)
 * - ...
 *
 * 뷰포트 설정(https://velog.io/@jayounglee92/HTML에서-메타-태그-사용법) 등의 몇몇 태그들은
 * Next.js에서 자동으로 넣어주기 때문에 직접 넣어주지 않아도 됩니다.
 *
 * 참고: https://nextjs.org/docs/advanced-features/custom-document
 */

import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&family=JetBrains+Mono&family=Nanum+Gothic+Coding&family=Noto+Sans+KR&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
