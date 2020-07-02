import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <div className="warning">Under active development, do not share.</div>
    <Layout>
      <div className="title">
        <h1>Chicago Police Department Arrest API</h1>
        <p>David Eads, The Chicago Reporter</p>
      </div>
      
      <p><Link to="explorer">Explore the data using the interactive console</Link></p>
    </Layout>
  </>
)

export default IndexPage
