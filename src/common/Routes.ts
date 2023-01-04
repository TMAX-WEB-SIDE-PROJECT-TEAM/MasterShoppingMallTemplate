/**
import BrandMagazine from '../modules/home/components/BrandMagazine';
 * 앱 상의 route들을 나열한 객체입니다.
 * 앱의 페이지 구조와 유사합니다.
 */
export const routes = {
  home: {
    index: "/",
    brandMagazine: "/brand-magazine",
    brandBestItem: "/brand-best-item",
  },
  shop: {
    index: "/shop",
    categoryDetails: "/shop/category-details",
    productDetail: "/shop/product-detail",
  },
  cart: {
    index: "/cart",
    order: "/cart/order",
  },
  noti: {
    index: "/noti",
  },
  me: {
    index: "/me",
    // ex. login: "/login",
  },
};
