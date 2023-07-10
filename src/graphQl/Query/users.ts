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

const GET_ME = gql`
  query getMe {
    getMe {
      name
      email
    }
}`

export {GET_POSTS,GET_ME}

