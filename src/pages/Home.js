import React from "react";
import Banner from "../components/main/BodyContent/Banner/Banner"
import Introduce from "../components/main/BodyContent/Introduce/Introduce"
import BestProduct from "../components/main/BodyContent/BestProduct/BestProduct"
import DirectoryItem from "../components/main/BodyContent/DirectoryItem/DirectoryItem"
import BrandStory from "../components/main/BodyContent/BrandStory/BrandStory"
import Issues from "../components/main/BodyContent/Issues/Issues"
import BigBottomBanner from "../components/main/BodyContent/BigBottomBanner/BigBottomBanner"
import Footer from "../components/nav/Footer";
const Home = () => (
  <div>
    <Banner/>
    <Introduce />
    <BestProduct />
    <DirectoryItem />
    <BrandStory />
    <Issues />
    <BigBottomBanner />
    <Footer />
  </div>
);

export default Home;
