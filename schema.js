export const typeDefs = `#graphql

  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }

  # mandatory
  type Query {
    review(id: ID!): Review
    reviews: [Review]
    
    game(id: ID!): Game
    games: [Game]

    author(id: ID!): Author
    authors: [Author]
  }

`
