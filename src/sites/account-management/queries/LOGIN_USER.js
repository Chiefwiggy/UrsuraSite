import { gql } from "apollo-boost";

const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
    auth {
        SignInUser(email: $email, password: $password) {
            token
            response {
            _id
            username
            email
            password
            access_level
            }
        }
    }
}
`

export default LOGIN_USER;