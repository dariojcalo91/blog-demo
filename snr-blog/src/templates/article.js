import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
    <Layout>
        <h1>{data.strapiArticulos.Titulo}</h1>
        <p>
            by{" "}
            <Link to={`/authors/Users_${data.strapiArticulos.autor.id}`}>
                {data.strapiArticulos.autor.username}
            </Link>
        </p>
        <Img fixed={data.strapiArticulos.Imagen.childImageSharp.fixed} />
        <p>{data.strapiArticulos.Contenido}</p>
    </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticulos(id: { eq: $id }) {
      Titulo
      Contenido
      Imagen {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      autor {
        id
        username
      }
    }
  }
`
