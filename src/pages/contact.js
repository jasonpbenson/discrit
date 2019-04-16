import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const About = ({ data }) => {
  const Homepage = data.allNodePage.edges[0].node
  return (
    <Layout>
      <h3>{Homepage.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: Homepage.body.value}}></div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const query = graphql`
query{
  allNodePage (
    filter: { id: { eq: "500c5685-86d3-59f8-baa1-dc4869f911ce" }}) {
    edges {
      node {
        id
        title
        body {
          value
        }
      }
    }
  }
}`

export default About