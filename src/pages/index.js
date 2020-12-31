import React from "react";
import Layout from "../components/Layout"
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import PersonalProjects from '../components/PersonalProjects';
import FreelanceProjects from '../components/FreelanceProjects';
import Social from '../components/Social';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <AboutMe />
      <PersonalProjects />
      <FreelanceProjects />
      <Social />
      <Contact />
    </Layout>
  )
}

export default IndexPage
