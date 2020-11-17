/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firstname
      lastname
      skills {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        skills {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployeeSkill = /* GraphQL */ `
  query GetEmployeeSkill($id: ID!) {
    getEmployeeSkill(id: $id) {
      id
      employee {
        id
        firstname
        lastname
        skills {
          nextToken
        }
        createdAt
        updatedAt
      }
      skill {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployeeSkills = /* GraphQL */ `
  query ListEmployeeSkills(
    $filter: ModelEmployeeSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        employee {
          id
          firstname
          lastname
          createdAt
          updatedAt
        }
        skill {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
