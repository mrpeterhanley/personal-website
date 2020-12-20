import React from "react";
import Layout from "../components/Layout"
import Home from '../components/Home';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <Contact />
    </Layout>
  )
}

export default IndexPage
