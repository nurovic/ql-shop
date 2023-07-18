import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query users {
    users {
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
  }
`;

const GET_ME = gql`
  query getMe {
    getMe {
      name
      email
    }
  }
`;

const GET_OWN_PRODUCTS = gql`
  query ownProducts {
    ownProducts {
      _id
      productName
      description
      price
      count
      reviews {
        comment
        userId {
          name
        }
      }
    }
  }
`;

export { GET_POSTS, GET_ME, GET_OWN_PRODUCTS };
