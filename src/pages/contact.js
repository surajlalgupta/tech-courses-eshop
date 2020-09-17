import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSetion from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Contact from "../components/Contact/Contact"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSetion
      img={data.img.childImageSharp.fluid}
      title="How can we help?"
      subtitle=""
      heroClass="about-background"
    />
    <Infoblock heading="Contact Us" />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
