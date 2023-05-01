import React from 'react'
import { useQuery, gql } from "@apollo/client";
const GET_POSTS = gql`
  query {
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
}
`;
const index = () => {
  const { error, loading, data } = useQuery(GET_POSTS);

  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;
  console.log(data)

  const { users } = data
  return (
    <div>

      {
        users?.map((user) =>{
          return (
            <h1>
              {user.name}
            </h1>
          )
        })
      }
    </div>
  )
}

export default index