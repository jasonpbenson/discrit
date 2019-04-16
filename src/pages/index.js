import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const Homepage = data.allNodePage.edges[0].node
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: Homepage.body.value}}></div>
      <Link to="/programs/">Programs</Link>
      <Link to="/resources/">Resources</Link>
      <Link to="/contact/">Contact</Link>
    </Layout>
  )
}

export const query = graphql`
query{
  allNodePage (
    filter: { id: { eq: "a9329ebb-c309-58a8-81a2-6f5f6394a72f" }}) {
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

export default IndexPage
