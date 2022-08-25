module.exports = {
  webpack: config => {
    config.module.rules.push(
      // svg파일들을 import하면 React 컴포넌트로 변환.
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
};
