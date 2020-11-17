/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEmployeeSkill = /* GraphQL */ `
  subscription OnCreateEmployeeSkill {
    onCreateEmployeeSkill {
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
export const onUpdateEmployeeSkill = /* GraphQL */ `
  subscription OnUpdateEmployeeSkill {
    onUpdateEmployeeSkill {
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
export const onDeleteEmployeeSkill = /* GraphQL */ `
  subscription OnDeleteEmployeeSkill {
    onDeleteEmployeeSkill {
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
