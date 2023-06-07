import { gql } from "@apollo/client"

export const GET_SKILLS=gql`
query Getskills {
    getskills {
      id
      name
    }
  }
`
export const CREATE_SKILLS=gql`
mutation Createskills($data: SkillsDto!) {
  createskills(data: $data) {
    name
    id
    tags {
      id
      name
    }
  }
}
`

export const UPDATE_SKILLS=gql`
mutation Updateskills($updateskillsId: String!, $input: SkillsDto!) {
    updateskills(id: $updateskillsId, input: $input) {
      name
      id
      tags {
        id
        name
      }
    }
  }
`
export const DELETE_SKILLS=gql`
mutation Mutation($deleteSkillId: String!) {
  deleteSkill(id: $deleteSkillId) {
    name
    id
  }
}
`

