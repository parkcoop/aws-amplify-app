/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createEmployeeSkill = /* GraphQL */ `
  mutation CreateEmployeeSkill(
    $input: CreateEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    createEmployeeSkill(input: $input, condition: $condition) {
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
export const updateEmployeeSkill = /* GraphQL */ `
  mutation UpdateEmployeeSkill(
    $input: UpdateEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    updateEmployeeSkill(input: $input, condition: $condition) {
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
export const deleteEmployeeSkill = /* GraphQL */ `
  mutation DeleteEmployeeSkill(
    $input: DeleteEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    deleteEmployeeSkill(input: $input, condition: $condition) {
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
