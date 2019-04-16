import React from "react"
import { graphql } from "gatsby"
import { Layout, Nav } from '../components';

const ROUTES = [
  { title: "Programs", route: "/programs/" },
  { title: "Resources", route: "/resources/" },
  { title: "Contact", route: "/contact/" }
];

const IndexPage = ({ data }) => {
  console.log(data)
  const Homepage = data.allNodePage.edges[0].node
  return (
    <Layout>
      <Nav routes={ROUTES} />
      <div dangerouslySetInnerHTML={{ __html: Homepage.body.value }}></div>
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