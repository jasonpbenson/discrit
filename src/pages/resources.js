import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const About = ({ data }) => {
  const Homepage = data.allNodePage.edges[0].node
  return (
    <Layout>
      <h3>{Homepage.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: Homepage.body.value}}></div>
      <Link to="/">Go Home</Link>
    </Layout>
  )
}

export const query = graphql`
query{
  allNodePage (
    filter: { id: { eq: "32344493-2440-5ed7-945c-a3cfb069c0c8" }}) {
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