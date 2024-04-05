import React from "react";
import NAVBAR_SECTION from "../../components/navbar/Topbar";
import HERO_SECTION from "./Herosection";
import ABOUT_SECTION from "./About";
import HEALTHANDWELLNESS_SECTION from "./HealthAndWellness";
import MARKETPLACE_SECTION from "./Marketplace";
import COMMUNITY_SECTION from "./Community";
import FAQS_SECTION from "./FAQS";
import FOOTER_SECTION from "./Footer";

const Home = () => {
  return (
    <>
      <NAVBAR_SECTION />
      <HERO_SECTION />
      <ABOUT_SECTION />
      <HEALTHANDWELLNESS_SECTION />
      <MARKETPLACE_SECTION />
      <COMMUNITY_SECTION />
      <FAQS_SECTION />
      <FOOTER_SECTION />
    </>
  );
};

export default Home;
