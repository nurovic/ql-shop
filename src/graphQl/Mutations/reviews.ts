import { gql } from "@apollo/client";

const MakeComment = gql`
  mutation MakeComment($productId: String!, $comment: String!) {
    makeComment(
      createReviewInput: { productId: $productId, comment: $comment }
    ) {
      comment
    }
  }
`;

export { MakeComment };
