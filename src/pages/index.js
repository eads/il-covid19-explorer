import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <div className="warning">Under active development, do not share.</div>
    <Layout>
      <div className="title">
        <h1>Illinois COVID-19 data API</h1>
        <p>David Eads, The Chicago Reporter</p>
      </div>
      
      <p><Link to="explorer">Explore the data using the interactive console</Link></p>

      <p>This is a currently experimental collection of COVID-19 related datasets focused on local data in Illinois. These datasets provide an anonymous, read-only GraphQL API built on Hasura. Hasura exposes a number of standard, SQL-like query features that <a href="https://hasura.io/docs/1.0/graphql/manual/queries/index.html">you can learn about in the Hasura docs</a>.</p>

      <p>Current datasets hosted:</p>

      <ul>
        <li>IDPH historical ZIP code data: Contains overall cases, test counts, and well as cases and test counts for race, age, and gender demographic groups. April 15 - June 17, 2020.</li>
      </ul>
    </Layout>
  </>
)

export default IndexPage
