/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClientSignup = /* GraphQL */ `
  query GetClientSignup($id: ID!) {
    getClientSignup(id: $id) {
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
export const listClientSignups = /* GraphQL */ `
  query ListClientSignups(
    $filter: ModelClientSignupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientSignups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClientUsers = /* GraphQL */ `
  query GetClientUsers($id: ID!) {
    getClientUsers(id: $id) {
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
export const listClientUsers = /* GraphQL */ `
  query ListClientUsers(
    $filter: ModelClientUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        name
        email
        role
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClientIntergrations = /* GraphQL */ `
  query GetClientIntergrations($id: ID!) {
    getClientIntergrations(id: $id) {
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
export const listClientIntergrations = /* GraphQL */ `
  query ListClientIntergrations(
    $filter: ModelClientIntergrationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientIntergrations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clientId
        tenantId
        loginMS
        consentMS
        attributes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClientUserWhitelisting = /* GraphQL */ `
  query GetClientUserWhitelisting($id: ID!) {
    getClientUserWhitelisting(id: $id) {
      id
      clientId
      displayName
      businessPhones
      givenName
      jobTitle
      mail
      mobilePhone
      officeLocation
      preferredLanguage
      surname
      userPrincipalName
      uid
      createdAt
      updatedAt
    }
  }
`;
export const listClientUserWhitelistings = /* GraphQL */ `
  query ListClientUserWhitelistings(
    $filter: ModelClientUserWhitelistingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientUserWhitelistings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clientId
        displayName
        businessPhones
        givenName
        jobTitle
        mail
        mobilePhone
        officeLocation
        preferredLanguage
        surname
        userPrincipalName
        uid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
