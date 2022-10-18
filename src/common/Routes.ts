/**
 * 앱 상의 route들을 나열한 객체입니다.
 * 앱의 페이지 구조와 유사합니다.
 */
export const routes = {
  home: {
    index: "/",
  },
  shop: {
    index: "/shop",
    categoryDetails: "/shop/category-details",
    productDetail: "/shop/product-detail",
  },
  cart: {
    index: "/cart",
  },
  noti: {
    index: "/noti",
  },
  me: {
    index: "/me",
    // ex. login: "/login",
  },
};
