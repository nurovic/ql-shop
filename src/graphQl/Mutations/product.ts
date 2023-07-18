import { gql } from "@apollo/client";

const CreateProduct = gql`
  mutation CreateProduct(
    $productName: String!,
    $description: String!,
    $price: Int!,
    $count: Int!
  ) {
    createProduct(
      productInput: {
        productName: $productName,
        description: $description,
        price: $price,
        count: $count
      }
    ) {
      userErrors {
        message
      }
      product {
        _id
        productName
        description
        price
        count
        user {
          email
          _id
          name
        }
      }
    }
  }
`;

export { CreateProduct };
