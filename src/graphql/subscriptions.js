/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClientSignup = /* GraphQL */ `
  subscription OnCreateClientSignup(
    $filter: ModelSubscriptionClientSignupFilterInput
  ) {
    onCreateClientSignup(filter: $filter) {
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
export const onUpdateClientSignup = /* GraphQL */ `
  subscription OnUpdateClientSignup(
    $filter: ModelSubscriptionClientSignupFilterInput
  ) {
    onUpdateClientSignup(filter: $filter) {
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
export const onDeleteClientSignup = /* GraphQL */ `
  subscription OnDeleteClientSignup(
    $filter: ModelSubscriptionClientSignupFilterInput
  ) {
    onDeleteClientSignup(filter: $filter) {
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
export const onCreateClientUsers = /* GraphQL */ `
  subscription OnCreateClientUsers(
    $filter: ModelSubscriptionClientUsersFilterInput
  ) {
    onCreateClientUsers(filter: $filter) {
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
export const onUpdateClientUsers = /* GraphQL */ `
  subscription OnUpdateClientUsers(
    $filter: ModelSubscriptionClientUsersFilterInput
  ) {
    onUpdateClientUsers(filter: $filter) {
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
export const onDeleteClientUsers = /* GraphQL */ `
  subscription OnDeleteClientUsers(
    $filter: ModelSubscriptionClientUsersFilterInput
  ) {
    onDeleteClientUsers(filter: $filter) {
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
export const onCreateClientIntergrations = /* GraphQL */ `
  subscription OnCreateClientIntergrations(
    $filter: ModelSubscriptionClientIntergrationsFilterInput
  ) {
    onCreateClientIntergrations(filter: $filter) {
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
export const onUpdateClientIntergrations = /* GraphQL */ `
  subscription OnUpdateClientIntergrations(
    $filter: ModelSubscriptionClientIntergrationsFilterInput
  ) {
    onUpdateClientIntergrations(filter: $filter) {
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
export const onDeleteClientIntergrations = /* GraphQL */ `
  subscription OnDeleteClientIntergrations(
    $filter: ModelSubscriptionClientIntergrationsFilterInput
  ) {
    onDeleteClientIntergrations(filter: $filter) {
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
