import React from 'react'
import { useQuery,  } from "@apollo/client";
import {GET_POSTS } from '../Query/users'
const index = () => {
  const { error, loading, data } = useQuery(GET_POSTS);

  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;

  const { users } = data
  return (
    <div>
      {
        users?.map((user: any) =>{
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