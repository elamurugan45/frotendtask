import { gql } from "@apollo/client"

export const GET_EMPLOYEECOUNT=gql`
query Query {
    getemployeecount
  }
`

export const TOP_SKILLS_EMPLOYEE_COUNT=gql`
query SkillCount {
    skillCount {
      name
      id
      employeeCount
    }
  }
`

export const TOP_TAGS_EMPLOYEE_COUNT=gql`
query TagCount {
    tagCount {
      name
      id
      employeeCount
    }
  }
`