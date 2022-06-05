import { gql } from '~/utils/graphql'

export const getSubWiki = gql`
  query GetSubWiki($slug: String) {
    subWiki(where: { slug: $slug }) {
      title
      content
      seeMore: wiki {
        subWikis(where: { NOT: [{ slug: $slug }] }) {
          slug
          title
        }
      }
    }
  }
`
