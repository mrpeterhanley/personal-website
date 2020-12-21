import React from "react";
import Layout from "../components/Layout"
import Home from '../components/Home';
import Contact from '../components/Contact';
import PersonalProjects from '../components/PersonalProjects';
import FreelanceProjects from '../components/FreelanceProjects';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <PersonalProjects />
      <FreelanceProjects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
