import { gql } from "@apollo/client";

const LogIn = gql`
mutation LogIn($email: String!, $password: String!) 
{  
  signin(
    credentials: {
          email: $email,
          password: $password
    }
  ){
      userErrors {
      message
    }
    user {
      email
      name
    }
      token
    }
  }

`

export {LogIn}