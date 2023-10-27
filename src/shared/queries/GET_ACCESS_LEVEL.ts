import {gql} from 'apollo-boost'

const GET_ACCESS_LEVEL = gql`
query Query {
    auth {
      GetAccessLevel
    }
  }

`

export default GET_ACCESS_LEVEL;