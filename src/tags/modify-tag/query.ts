import {gql} from "@apollo/client";


export const GET_TAG=gql`
query Gettags {
  gettags {
    name
    id
  }
}
`
export const CREATE_TAG=gql`
mutation Createtags($data: TagsDto!) {
    createtags(data: $data) {
      name
      id
    }
  }
`
export const UPDATE_TAG=gql`
mutation Updatetags($updatetagsId: String!, $input: TagsDto!) {
  updatetags(id: $updatetagsId, input: $input) {
    name
    id
  }
}
`
export const DELETE_TAG=gql`
mutation Deletetags($deletetagsId: String!) {
    deletetags(id: $deletetagsId) {
      name
      id
    }
  }
`
