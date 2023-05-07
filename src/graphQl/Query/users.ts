import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query users {
  users{
    _id
    name
    email
    products {
      _id
      productName
      reviews {
        comment
      }
    }
  }
}`

export {GET_POSTS}