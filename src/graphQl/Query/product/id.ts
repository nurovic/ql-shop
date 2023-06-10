import { gql } from "@apollo/client"

const GET_PRODUCT_ID = gql`
query productById($id: string){
  productById(id: $id) {
    _id
    productName
    description
    price
    count
    user {
      name
    }
    reviews {
      comment
      userId{
        name
      }
    }
  }
}

`

export {GET_PRODUCT_ID}