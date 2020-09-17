import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSetion from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSetion
      img={data.img.childImageSharp.fluid}
      title="About passionate coders"
      subtitle=""
      heroClass="about-background"
    />
    <DualInfoblock heading="A Message from CEO" />
    <Infoblock heading="About Vision" />
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
