# Shopping mall

## Technologies

- 렌더링: React, Next.js
- 스타일링: SCSS, Emotion, MUI
- 요청: Axios
- 패키지 관리: Yarn Berry
- 상태관리: Recoil
- 언어: TypeScript
- 코드 관리: ESLint, Prettier

## Requirements

- [Node.js](https://nodejs.org/) 설치
- Yarn Berry 사용을 위하여 npm corepack 설치 ([참고자료](https://yarnpkg.com/getting-started/install))
  - `corepack enable` 실행
  - 권한 에러 발생 시: Windows는 관리자 cmd에서, 그 외 OS는 sudo 붙여서 위 스크립트 실행

## How to install

- `yarn` 또는 `yarn install`을 실행하여 의존성들을 설치하세요.

## How to run

- `yarn dev`를 실행하여 개발 모드 빌드 & 서버 실행
- `yarn build && yarn start`를 실행하여 배포 모드 빌드 & 서버 실행
- `yarn lint`를 실행하여 코드 스타일 체크
  - `yarn lint:fix`를 실행하면 체크와 동시에 수정까지 이루어집니다.

## How to deploy

- 현재 클라이언트 배포에는 [Vercel](https://vercel.com/)을 사용 중입니다. (상황에 따라 추후 변경 가능)
  - main 브랜치가 업데이트되면 자동으로 재배포 됩니다.
