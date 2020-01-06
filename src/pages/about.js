import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>About Page </h1>
        <p>
          About me? check me out <Link to="/contact">here</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
