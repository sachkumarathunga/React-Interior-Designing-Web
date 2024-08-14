import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import FeaturedProjects2 from "./components/FeaturedProjects2";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import AdditionalImages from "./components/AdditionalImages";
import WhatWeOffer from "./components/WhatWeOffer";
import BusinessAndEducation from "./components/BusinessAndEducation";
import DownloadGuide from "./components/DownloadGuide";
import Footer from "./components/Footer";
import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import AboutImages from "./components/AboutImage";
import OurMission from "./components/OurMission";
import OurProcess from "./components/OurProcess";
import OurClients from "./components/OurClients";
import WorkWithUs from "./components/WorkWithUs";
import ServicesHero from "./components/ServicesHero";  
import ArchitectureSection from "./components/ArchitectureSection";
import EngineeringSection from "./components/EngineeringSection";
import ArchitectureSection2 from "./components/ArchitectureSection copy";
import WorkWithUs2 from "./components/WorkWithUs copy";
import ProjectHero from "./components/ProjectHero";
import FacilityMasterplan from "./components/FacilityMasterplan";

import ProjectSection from "./components/ProjectSection";
import FacilityMasterplan2 from "./components/FacilityMasterplan2";
import CustomImageSection from "./components/RelatedProjects";
import HiddenDoor from "./components/HiddenDoor";
import ContactPage from "./components/contact";

import SpotlightSection from "./components/SpotlightSection";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeHero />
                <FeaturedProjects2 />
                <HeroSection />
                <AboutUs />
                <AdditionalImages />
                <WhatWeOffer />
                <BusinessAndEducation />
                <DownloadGuide />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutHero />
                <AboutStory />
                <AboutImages />
                <OurMission />
                <OurProcess />
                <OurClients />
                <WorkWithUs />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <ServicesHero />
                <ArchitectureSection />
                <EngineeringSection />
                <ArchitectureSection2 />
                <FeaturedProjects2 />
                <OurClients />
                <WorkWithUs2 />
              </>
            }
          />

          <Route
            path="/projects"
            element={
              <>
                <ProjectHero />
                <FacilityMasterplan />
                <ProjectSection />
                <FacilityMasterplan2 />
                <CustomImageSection />
              </>
            }
          />
          <Route
            path="/Our Portfolio"
            element={
              <>
                <SpotlightSection />
                
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactPage />
                <HiddenDoor />
              </>
            }
          />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
