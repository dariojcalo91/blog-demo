import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const UserTemplate = ({ data }) => (
    <Layout>
        <h1>{data.strapiUsers.username}</h1>
        <ul>
            {data.strapiUsers.articulos.map(article => (
                <li key={article.id}>
                    <h2>
                        <Link to={`/Article_${article.id}`}>{article.Titulo}</Link>
                    </h2>
                    <p>{article.Contenido}</p>
                </li>
            ))}
        </ul>
    </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUsers(id: { eq: $id }) {
      id
      username
      articulos {
        id
        Titulo
        Contenido
      }
    }
  }
`
