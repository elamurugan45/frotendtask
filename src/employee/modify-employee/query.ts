import { gql } from "@apollo/client"

export const GET_EMPLOYEE=gql`
query Getemployee($filter: skillFilter) {
  getemployee(filter: $filter) {
    phone
    name
    id
    email
    DOJ
    age
    DOB
    skills {
      name
      id
    }
  }
}
`

export const CREATE_EMPLOYEE=gql`
mutation Createemployee($data: employeeDto!) {
    createemployee(data: $data) {
      phone
      name
      id
      email
      DOJ
      DOB
      age
      tags {
        name
        id
      }
      skills {
        tags {
          name
          id
        }
        name
        id
      }
    }
  }
`


export const UPDATE_EMPLOYEE=gql`
mutation Updateemployee($updateemployeeId: String!, $input: employeeDto!) {
    updateemployee(id: $updateemployeeId, input: $input) {
      tags {
        id
        name
      }
      skills {
        tags {
          name
          id
        }
        name
        id
      }
      phone
      name
      id
      email
      DOJ
      DOB
      age
    }
  }
`

export const DELETE_EMPLOYEE=gql`
mutation Deleteemployee($deleteemployeeId: String!) {
    deleteemployee(id: $deleteemployeeId) {
      tags {
        id
        name
      }
      skills {
        tags {
          id
          name
        }
        name
        id
      }
      phone
      name
      id
      email
      DOJ
      DOB
    }
  }
`