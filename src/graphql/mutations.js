/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClientSignup = /* GraphQL */ `
  mutation CreateClientSignup(
    $input: CreateClientSignupInput!
    $condition: ModelClientSignupConditionInput
  ) {
    createClientSignup(input: $input, condition: $condition) {
      id
      name
      email
      phone
      company
      address
      city
      state
      zip
      country
      createdAt
      updatedAt
    }
  }
`;
export const updateClientSignup = /* GraphQL */ `
  mutation UpdateClientSignup(
    $input: UpdateClientSignupInput!
    $condition: ModelClientSignupConditionInput
  ) {
    updateClientSignup(input: $input, condition: $condition) {
      id
      name
      email
      phone
      company
      address
      city
      state
      zip
      country
      createdAt
      updatedAt
    }
  }
`;
export const deleteClientSignup = /* GraphQL */ `
  mutation DeleteClientSignup(
    $input: DeleteClientSignupInput!
    $condition: ModelClientSignupConditionInput
  ) {
    deleteClientSignup(input: $input, condition: $condition) {
      id
      name
      email
      phone
      company
      address
      city
      state
      zip
      country
      createdAt
      updatedAt
    }
  }
`;
export const createClientUsers = /* GraphQL */ `
  mutation CreateClientUsers(
    $input: CreateClientUsersInput!
    $condition: ModelClientUsersConditionInput
  ) {
    createClientUsers(input: $input, condition: $condition) {
      id
      clientId
      name
      email
      role
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateClientUsers = /* GraphQL */ `
  mutation UpdateClientUsers(
    $input: UpdateClientUsersInput!
    $condition: ModelClientUsersConditionInput
  ) {
    updateClientUsers(input: $input, condition: $condition) {
      id
      clientId
      name
      email
      role
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteClientUsers = /* GraphQL */ `
  mutation DeleteClientUsers(
    $input: DeleteClientUsersInput!
    $condition: ModelClientUsersConditionInput
  ) {
    deleteClientUsers(input: $input, condition: $condition) {
      id
      clientId
      name
      email
      role
      status
      createdAt
      updatedAt
    }
  }
`;
export const createClientIntergrations = /* GraphQL */ `
  mutation CreateClientIntergrations(
    $input: CreateClientIntergrationsInput!
    $condition: ModelClientIntergrationsConditionInput
  ) {
    createClientIntergrations(input: $input, condition: $condition) {
      id
      clientId
      tenantId
      loginMS
      consentMS
      attributes
      createdAt
      updatedAt
    }
  }
`;
export const updateClientIntergrations = /* GraphQL */ `
  mutation UpdateClientIntergrations(
    $input: UpdateClientIntergrationsInput!
    $condition: ModelClientIntergrationsConditionInput
  ) {
    updateClientIntergrations(input: $input, condition: $condition) {
      id
      clientId
      tenantId
      loginMS
      consentMS
      attributes
      createdAt
      updatedAt
    }
  }
`;
export const deleteClientIntergrations = /* GraphQL */ `
  mutation DeleteClientIntergrations(
    $input: DeleteClientIntergrationsInput!
    $condition: ModelClientIntergrationsConditionInput
  ) {
    deleteClientIntergrations(input: $input, condition: $condition) {
      id
      clientId
      tenantId
      loginMS
      consentMS
      attributes
      createdAt
      updatedAt
    }
  }
`;
