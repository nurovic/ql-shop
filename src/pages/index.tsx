import React from 'react'
import { useQuery,  } from "@apollo/client";
import {GET_POSTS } from '../Query/users'
import Login from '../components/Modals/Login'
const index = () => {
  const { error, loading, data } = useQuery(GET_POSTS);

  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;
  console.log(data)

  const { users } = data
  return (
    <div>
      <Login />
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