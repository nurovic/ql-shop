import { gql } from "@apollo/client";

const GET_ORDER_CARD = gql`
  query getOrderCard {
    getOrderCard {
      amount
      piece
      product {
        _id
        product {
          user {
            name
          }
          productName
          price
        }
      }
    }
  }
`;

export { GET_ORDER_CARD };
