import { gql } from "apollo-boost";

const LOGIN_ON_REFRESH = gql`
mutation Mutation($email: String!, $token: String!) {
    auth {
      SignInUserWithToken(email: $email, token: $token) {
        token
        response {
          _id
          username
          email
          access_level
        }
        status
      }
    }
  }
`

export default LOGIN_ON_REFRESH;