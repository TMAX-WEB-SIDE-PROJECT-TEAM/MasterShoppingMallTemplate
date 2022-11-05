import Page from "common/components/Page";
import BrandBestItem from "modules/home/components/BrandBestItem";
import BrandMagazine from "modules/home/components/BrandMagazine";

/**
 * api call 을 통해 받아온 BrandMagazineProps
 *
 */

const HomePage = () => (
  <Page>
    <BrandMagazine />
    <BrandBestItem />
  </Page>
);

export default HomePage;
