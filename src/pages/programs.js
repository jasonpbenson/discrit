import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"

const About = ({ data }) => {
  const Homepage = data.allNodePage.edges[0].node
  return (
    <Layout>
      <h3>{Homepage.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: Homepage.body.value}}></div>
    </Layout>
  )
}

export const query = graphql`
query{
  allNodePage (
    filter: { id: { eq: "c40f93e2-9e14-5986-b75c-de37ba2002de" }}) {
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