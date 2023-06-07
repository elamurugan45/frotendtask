import { gql } from "@apollo/client"

export const GET_EMPLOYEE=gql`
query Getemployee($filter: SkillFilter!) {
  getemployee(filter: $filter) {
    phone
    name
    id
    email
    age
    DOJ
    DOB
    skills {
      name
      id
    }
  }
}
`

export const CREATE_EMPLOYEE=gql`
mutation Createemployee($data: EmployeeDto!) {
  createemployee(data: $data) {
    phone
    id
    name
    email
    age
    DOJ
    DOB
    skills {
      id
      name
    }
    tags {
      id
      name
    }
  }
}
`


export const UPDATE_EMPLOYEE=gql`
mutation Updateemployee($updateemployeeId: String!, $input: EmployeeDto!) {
  updateemployee(id: $updateemployeeId, input: $input) {
    phone
    name
    id
    email
    age
    DOJ
    DOB
    skills {
      id
      name
      tags {
        name
        id
      }
    }
  }
}
`

export const DELETE_EMPLOYEE=gql`
mutation Deleteemployee($deleteemployeeId: String!) {
  deleteemployee(id: $deleteemployeeId) {
    phone
    name
    id
    email
    age
    DOJ
    DOB
    skills {
      name
      id
      tags {
        id
        name
      }
    }
  }
}
`