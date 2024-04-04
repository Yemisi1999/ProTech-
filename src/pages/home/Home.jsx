import React from "react";
import NavBarSection from "../../components/navbar/Topbar";
import HeroSection from "./Herosection";
import AboutSectionSection from "./About";
import HealthAndWellness from "./HealthAndWellness";
import ToolsAndFeaturesSection from "./ToolsAndFeatures";
import MarketplaceSection from "./Marketplace";
import CommunitySection from "./Community";
import FAQSSection from "./FAQS";
import FooterSection from "./Footer";

const Home = () => {
  return (
    <>
      <NavBarSection />
      <HeroSection />
      <AboutSectionSection />
      <HealthAndWellness />
      <ToolsAndFeaturesSection />
      <MarketplaceSection />
      <CommunitySection />
      <FAQSSection />
      <FooterSection />
    </>
  );
};

export default Home;
