import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import AboutCounter from "../components/about/about-counter";
import TeamHome from "../components/team/team-home";
import VideoCard from "../components/videos/video-card";
import TestimonialsOne from "../components/testimonials/testimonials-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const About = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="About Page || CPE || Ministry">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="About Page" crumbTitle="About" />
          <StickyHeader />
          <AboutOne />
          {/* <BrandCarousel extraClass="client-carousel__has-border-top" /> */}
          <AboutCounter />
          <TeamHome />
          {/* <VideoCard /> */}
          {/* <TestimonialsOne /> */}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default About;
