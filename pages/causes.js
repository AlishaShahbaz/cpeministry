import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CausesPage from "../components/causes/causes-page";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const Causes = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Causes Page || CPE || Ministry">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Causes Page" crumbTitle="Causes" />
          <CausesPage />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Causes;
