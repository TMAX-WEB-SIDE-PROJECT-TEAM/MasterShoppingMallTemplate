module.exports = {
  // typed-scss-modules가 absolute import를 인식할 수 있도록 함.
  // ex. `@use "abc/def.scss";` -> src/abc/def.scss로 해석.
  includePaths: ["src"],
};
