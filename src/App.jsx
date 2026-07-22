import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import BuyerTools from './pages/BuyerTools';
import ContactUs from './pages/ContactUs';
import ContactUs2 from './pages/ContactUs2';
import FibcDischarge from './pages/FibcDischarge';
import FibcFilling from './pages/FibcFilling';
import FibcLiftLoops from './pages/FibcLiftLoops';
import FibcLiners from './pages/FibcLiners';
import FibcStitchTypes from './pages/FibcStitchTypes';
import FibcTypes from './pages/FibcTypes';
import HomePage from './pages/HomePage';
import NorthAmericaPaperBag2 from './pages/NorthAmericaPaperBag2';
import ProductBaffleBags from './pages/ProductBaffleBags';
import ProductBagTypes from './pages/ProductBagTypes';
import ProductBottomConstruction from './pages/ProductBottomConstruction';
import ProductBurlapFabricHessianFabric from './pages/ProductBurlapFabricHessianFabric';
import ProductBurlapTwins from './pages/ProductBurlapTwins';
import ProductCConductiveBag from './pages/ProductCConductiveBag';
import ProductCoolerBags from './pages/ProductCoolerBags';
import ProductCottonBags from './pages/ProductCottonBags';
import ProductCropCovers from './pages/ProductCropCovers';
import ProductDiaperBag from './pages/ProductDiaperBag';
import ProductFabricOptions from './pages/ProductFabricOptions';
import ProductGroundCovers from './pages/ProductGroundCovers';
import ProductHailNets from './pages/ProductHailNets';
import ProductHorticulturalLandscapingProducts from './pages/ProductHorticulturalLandscapingProducts';
import ProductHouseWrap from './pages/ProductHouseWrap';
import ProductJuteBurlapBags from './pages/ProductJuteBurlapBags';
import ProductJuteFabric from './pages/ProductJuteFabric';
import ProductJuteGardeningFabricLandscapingFabric from './pages/ProductJuteGardeningFabricLandscapingFabric';
import ProductJuteSacks from './pages/ProductJuteSacks';
import ProductJuteSacks2 from './pages/ProductJuteSacks2';
import ProductJuteSacksPrintedBags from './pages/ProductJuteSacksPrintedBags';
import ProductJuteSacksTreeCover from './pages/ProductJuteSacksTreeCover';
import ProductJuteTwineCord from './pages/ProductJuteTwineCord';
import ProductJuteWoodCarrierBag from './pages/ProductJuteWoodCarrierBag';
import ProductLenoBag from './pages/ProductLenoBag';
import ProductLenoFabric from './pages/ProductLenoFabric';
import ProductLenoFlatFabric from './pages/ProductLenoFlatFabric';
import ProductLenoFlatFabricRolls from './pages/ProductLenoFlatFabricRolls';
import ProductLinerOptions from './pages/ProductLinerOptions';
import ProductLumberCoverFabrics from './pages/ProductLumberCoverFabrics';
import ProductMonofilamentFabrics from './pages/ProductMonofilamentFabrics';
import ProductPaperBags from './pages/ProductPaperBags';
import ProductPeContainerLinersDryBulkLiquid from './pages/ProductPeContainerLinersDryBulkLiquid';
import ProductPlantNets from './pages/ProductPlantNets';
import ProductPpContainerLinersDryBulk from './pages/ProductPpContainerLinersDryBulk';
import ProductPpWovenNonWovenBags from './pages/ProductPpWovenNonWovenBags';
import ProductPpWovenSacksA from './pages/ProductPpWovenSacksA';
import ProductPrintOptions from './pages/ProductPrintOptions';
import ProductPrintedPpWovenSack from './pages/ProductPrintedPpWovenSack';
import ProductRaschelBagsFabric from './pages/ProductRaschelBagsFabric';
import ProductRetailFriendlyPackaging from './pages/ProductRetailFriendlyPackaging';
import ProductRetailShoppingBagA from './pages/ProductRetailShoppingBagA';
import ProductRetailShoppingBagB from './pages/ProductRetailShoppingBagB';
import ProductRetailShoppingBagC from './pages/ProductRetailShoppingBagC';
import ProductRetailShoppingBagD from './pages/ProductRetailShoppingBagD';
import ProductRoofingUnderlayment from './pages/ProductRoofingUnderlayment';
import ProductRpetFabrics from './pages/ProductRpetFabrics';
import ProductShadesNet from './pages/ProductShadesNet';
import ProductSharedNet from './pages/ProductSharedNet';
import ProductSilageNet from './pages/ProductSilageNet';
import ProductSilageWrapBaleWrap from './pages/ProductSilageWrapBaleWrap';
import ProductSiltFence from './pages/ProductSiltFence';
import ProductSoilSaver from './pages/ProductSoilSaver';
import ProductTopFinishes from './pages/ProductTopFinishes';
import ProductTrellisNetting from './pages/ProductTrellisNetting';
import ProductUnBags from './pages/ProductUnBags';
import ProductUnprinted from './pages/ProductUnprinted';
import ProductUnprinted2 from './pages/ProductUnprinted2';
import ProductWiletedLenoBag from './pages/ProductWiletedLenoBag';
import ProductWindshieldNets from './pages/ProductWindshieldNets';
import ProductWineBeverageBags from './pages/ProductWineBeverageBags';
import ProductWovenGroundCover from './pages/ProductWovenGroundCover';
import ProductWovenSpecialtyFabrics from './pages/ProductWovenSpecialtyFabrics';
import ProductCategoryAgroTextilesFeed from './pages/ProductCategoryAgroTextilesFeed';
import ProductCategoryAgroTextiles from './pages/ProductCategoryAgroTextiles';
import ProductCategoryAgroTextilesPage2 from './pages/ProductCategoryAgroTextilesPage2';
import ProductCategoryBaffleBagsFeed from './pages/ProductCategoryBaffleBagsFeed';
import ProductCategoryBaffleBags from './pages/ProductCategoryBaffleBags';
import ProductCategoryConductiveBagFeed from './pages/ProductCategoryConductiveBagFeed';
import ProductCategoryConductiveBag from './pages/ProductCategoryConductiveBag';
import ProductCategoryContainerLinersFeed from './pages/ProductCategoryContainerLinersFeed';
import ProductCategoryContainerLiners from './pages/ProductCategoryContainerLiners';
import ProductCategoryDiaperBagFeed from './pages/ProductCategoryDiaperBagFeed';
import ProductCategoryDiaperBag from './pages/ProductCategoryDiaperBag';
import ProductCategoryFibcFeed from './pages/ProductCategoryFibcFeed';
import ProductCategoryFibc from './pages/ProductCategoryFibc';
import ProductCategoryJuteBurlapFeed from './pages/ProductCategoryJuteBurlapFeed';
import ProductCategoryJuteBurlap from './pages/ProductCategoryJuteBurlap';
import ProductCategoryJuteBurlapPage2 from './pages/ProductCategoryJuteBurlapPage2';
import ProductCategoryLenoBagsFebricFeed from './pages/ProductCategoryLenoBagsFebricFeed';
import ProductCategoryLenoBagsFebric from './pages/ProductCategoryLenoBagsFebric';
import ProductCategoryPpWovenSacksFeed from './pages/ProductCategoryPpWovenSacksFeed';
import ProductCategoryPpWovenSacks from './pages/ProductCategoryPpWovenSacks';
import ProductCategoryRetailShopingBagsFeed from './pages/ProductCategoryRetailShopingBagsFeed';
import ProductCategoryRetailShopingBags from './pages/ProductCategoryRetailShopingBags';
import ProductCategorySpecialtyFebricsFeed from './pages/ProductCategorySpecialtyFebricsFeed';
import ProductCategorySpecialtyFebrics from './pages/ProductCategorySpecialtyFebrics';
import ProductCategoryUnBagFeed from './pages/ProductCategoryUnBagFeed';
import ProductCategoryUnBag from './pages/ProductCategoryUnBag';
import Products from './pages/Products';
import RpetFibc from './pages/RpetFibc';
import TermsAndConditions from './pages/TermsAndConditions';
import Welcome from './pages/Welcome';
import WpJson from './pages/WpJson';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/buyer-tools" element={<BuyerTools />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact-us-2" element={<ContactUs2 />} />
        <Route path="/fibc/discharge" element={<FibcDischarge />} />
        <Route path="/fibc/filling" element={<FibcFilling />} />
        <Route path="/fibc/lift-loops" element={<FibcLiftLoops />} />
        <Route path="/fibc/liners" element={<FibcLiners />} />
        <Route path="/fibc/stitch-types" element={<FibcStitchTypes />} />
        <Route path="/fibc/types" element={<FibcTypes />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/north-america-paper-bag-2" element={<NorthAmericaPaperBag2 />} />
        <Route path="/product/baffle-bags" element={<ProductBaffleBags />} />
        <Route path="/product/bag-types" element={<ProductBagTypes />} />
        <Route path="/product/bottom-construction" element={<ProductBottomConstruction />} />
        <Route path="/product/burlap-fabric-hessian-fabric" element={<ProductBurlapFabricHessianFabric />} />
        <Route path="/product/burlap-twins" element={<ProductBurlapTwins />} />
        <Route path="/product/c-conductive-bag" element={<ProductCConductiveBag />} />
        <Route path="/product/cooler-bags" element={<ProductCoolerBags />} />
        <Route path="/product/cotton-bags" element={<ProductCottonBags />} />
        <Route path="/product/crop-covers" element={<ProductCropCovers />} />
        <Route path="/product/diaper-bag" element={<ProductDiaperBag />} />
        <Route path="/product/fabric-options" element={<ProductFabricOptions />} />
        <Route path="/product/ground-covers" element={<ProductGroundCovers />} />
        <Route path="/product/hail-nets" element={<ProductHailNets />} />
        <Route path="/product/horticultural-landscaping-products" element={<ProductHorticulturalLandscapingProducts />} />
        <Route path="/product/house-wrap" element={<ProductHouseWrap />} />
        <Route path="/product/jute-burlap-bags" element={<ProductJuteBurlapBags />} />
        <Route path="/product/jute-fabric" element={<ProductJuteFabric />} />
        <Route path="/product/jute-gardening-fabric-landscaping-fabric" element={<ProductJuteGardeningFabricLandscapingFabric />} />
        <Route path="/product/jute-sacks" element={<ProductJuteSacks />} />
        <Route path="/product/jute-sacks-2" element={<ProductJuteSacks2 />} />
        <Route path="/product/jute-sacks-printed-bags" element={<ProductJuteSacksPrintedBags />} />
        <Route path="/product/jute-sacks-tree-cover" element={<ProductJuteSacksTreeCover />} />
        <Route path="/product/jute-twine-cord" element={<ProductJuteTwineCord />} />
        <Route path="/product/jute-wood-carrier-bag" element={<ProductJuteWoodCarrierBag />} />
        <Route path="/product/leno-bag" element={<ProductLenoBag />} />
        <Route path="/product/leno-fabric" element={<ProductLenoFabric />} />
        <Route path="/product/leno-flat-fabric" element={<ProductLenoFlatFabric />} />
        <Route path="/product/leno-flat-fabric-rolls" element={<ProductLenoFlatFabricRolls />} />
        <Route path="/product/liner-options" element={<ProductLinerOptions />} />
        <Route path="/product/lumber-cover-fabrics" element={<ProductLumberCoverFabrics />} />
        <Route path="/product/monofilament-fabrics" element={<ProductMonofilamentFabrics />} />
        <Route path="/product/paper-bags" element={<ProductPaperBags />} />
        <Route path="/product/pe-container-liners-dry-bulk-liquid" element={<ProductPeContainerLinersDryBulkLiquid />} />
        <Route path="/product/plant-nets" element={<ProductPlantNets />} />
        <Route path="/product/pp-container-liners-dry-bulk" element={<ProductPpContainerLinersDryBulk />} />
        <Route path="/product/pp-woven-non-woven-bags" element={<ProductPpWovenNonWovenBags />} />
        <Route path="/product/pp-woven-sacks-a" element={<ProductPpWovenSacksA />} />
        <Route path="/product/print-options" element={<ProductPrintOptions />} />
        <Route path="/product/printed-pp-woven-sack" element={<ProductPrintedPpWovenSack />} />
        <Route path="/product/raschel-bags-fabric" element={<ProductRaschelBagsFabric />} />
        <Route path="/product/retail-friendly-packaging" element={<ProductRetailFriendlyPackaging />} />
        <Route path="/product/retail-shopping-bag-a" element={<ProductRetailShoppingBagA />} />
        <Route path="/product/retail-shopping-bag-b" element={<ProductRetailShoppingBagB />} />
        <Route path="/product/retail-shopping-bag-c" element={<ProductRetailShoppingBagC />} />
        <Route path="/product/retail-shopping-bag-d" element={<ProductRetailShoppingBagD />} />
        <Route path="/product/roofing-underlayment" element={<ProductRoofingUnderlayment />} />
        <Route path="/product/rpet-fabrics" element={<ProductRpetFabrics />} />
        <Route path="/product/shades-net" element={<ProductShadesNet />} />
        <Route path="/product/shared-net" element={<ProductSharedNet />} />
        <Route path="/product/silage-net" element={<ProductSilageNet />} />
        <Route path="/product/silage-wrap-bale-wrap" element={<ProductSilageWrapBaleWrap />} />
        <Route path="/product/silt-fence" element={<ProductSiltFence />} />
        <Route path="/product/soil-saver" element={<ProductSoilSaver />} />
        <Route path="/product/top-finishes" element={<ProductTopFinishes />} />
        <Route path="/product/trellis-netting" element={<ProductTrellisNetting />} />
        <Route path="/product/un-bags" element={<ProductUnBags />} />
        <Route path="/product/unprinted" element={<ProductUnprinted />} />
        <Route path="/product/unprinted-2" element={<ProductUnprinted2 />} />
        <Route path="/product/wileted-leno-bag" element={<ProductWiletedLenoBag />} />
        <Route path="/product/windshield-nets" element={<ProductWindshieldNets />} />
        <Route path="/product/wine-beverage-bags" element={<ProductWineBeverageBags />} />
        <Route path="/product/woven-ground-cover" element={<ProductWovenGroundCover />} />
        <Route path="/product/woven-specialty-fabrics" element={<ProductWovenSpecialtyFabrics />} />
        <Route path="/product_category/agro-textiles/feed" element={<ProductCategoryAgroTextilesFeed />} />
        <Route path="/product_category/agro-textiles" element={<ProductCategoryAgroTextiles />} />
        <Route path="/product_category/agro-textiles/page/2" element={<ProductCategoryAgroTextilesPage2 />} />
        <Route path="/product_category/baffle-bags/feed" element={<ProductCategoryBaffleBagsFeed />} />
        <Route path="/product_category/baffle-bags" element={<ProductCategoryBaffleBags />} />
        <Route path="/product_category/conductive-bag/feed" element={<ProductCategoryConductiveBagFeed />} />
        <Route path="/product_category/conductive-bag" element={<ProductCategoryConductiveBag />} />
        <Route path="/product_category/container-liners/feed" element={<ProductCategoryContainerLinersFeed />} />
        <Route path="/product_category/container-liners" element={<ProductCategoryContainerLiners />} />
        <Route path="/product_category/diaper-bag/feed" element={<ProductCategoryDiaperBagFeed />} />
        <Route path="/product_category/diaper-bag" element={<ProductCategoryDiaperBag />} />
        <Route path="/product_category/fibc/feed" element={<ProductCategoryFibcFeed />} />
        <Route path="/product_category/fibc" element={<ProductCategoryFibc />} />
        <Route path="/product_category/jute-burlap/feed" element={<ProductCategoryJuteBurlapFeed />} />
        <Route path="/product_category/jute-burlap" element={<ProductCategoryJuteBurlap />} />
        <Route path="/product_category/jute-burlap/page/2" element={<ProductCategoryJuteBurlapPage2 />} />
        <Route path="/product_category/leno-bags-febric/feed" element={<ProductCategoryLenoBagsFebricFeed />} />
        <Route path="/product_category/leno-bags-febric" element={<ProductCategoryLenoBagsFebric />} />
        <Route path="/product_category/pp-woven-sacks/feed" element={<ProductCategoryPpWovenSacksFeed />} />
        <Route path="/product_category/pp-woven-sacks" element={<ProductCategoryPpWovenSacks />} />
        <Route path="/product_category/retail-shoping-bags/feed" element={<ProductCategoryRetailShopingBagsFeed />} />
        <Route path="/product_category/retail-shoping-bags" element={<ProductCategoryRetailShopingBags />} />
        <Route path="/product_category/specialty-febrics/feed" element={<ProductCategorySpecialtyFebricsFeed />} />
        <Route path="/product_category/specialty-febrics" element={<ProductCategorySpecialtyFebrics />} />
        <Route path="/product_category/un-bag/feed" element={<ProductCategoryUnBagFeed />} />
        <Route path="/product_category/un-bag" element={<ProductCategoryUnBag />} />
        <Route path="/products" element={<Products />} />
        <Route path="/rpet-fibc" element={<RpetFibc />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/wp-json" element={<WpJson />} />

      </Routes>
    </Router>
  );
}

export default App;