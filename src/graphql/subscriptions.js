/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClientSignup = /* GraphQL */ `
  subscription OnCreateClientSignup(
    $filter: ModelSubscriptionClientSignupFilterInput
    $clientId: String
  ) {
    onCreateClientSignup(filter: $filter, clientId: $clientId) {
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
      clientId
    }
  }
`;
export const onUpdateClientSignup = /* GraphQL */ `
  subscription OnUpdateClientSignup(
    $filter: ModelSubscriptionClientSignupFilterInput
    $clientId: String
  ) {
    onUpdateClientSignup(filter: $filter, clientId: $clientId) {
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
      clientId
    }
  }
`;
export const onDeleteClientSignup = /* GraphQL */ `
  subscription OnDeleteClientSignup(
    $filter: ModelSubscriptionClientSignupFilterInput
    $clientId: String
  ) {
    onDeleteClientSignup(filter: $filter, clientId: $clientId) {
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
      clientId
    }
  }
`;
export const onCreateClientUsers = /* GraphQL */ `
  subscription OnCreateClientUsers(
    $filter: ModelSubscriptionClientUsersFilterInput
    $clientId: String
  ) {
    onCreateClientUsers(filter: $filter, clientId: $clientId) {
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
    $clientId: String
  ) {
    onUpdateClientUsers(filter: $filter, clientId: $clientId) {
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
    $clientId: String
  ) {
    onDeleteClientUsers(filter: $filter, clientId: $clientId) {
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
    $clientId: String
  ) {
    onCreateClientIntergrations(filter: $filter, clientId: $clientId) {
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
    $clientId: String
  ) {
    onUpdateClientIntergrations(filter: $filter, clientId: $clientId) {
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
    $clientId: String
  ) {
    onDeleteClientIntergrations(filter: $filter, clientId: $clientId) {
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
export const onCreateClientUserWhitelisting = /* GraphQL */ `
  subscription OnCreateClientUserWhitelisting(
    $filter: ModelSubscriptionClientUserWhitelistingFilterInput
    $clientId: String
  ) {
    onCreateClientUserWhitelisting(filter: $filter, clientId: $clientId) {
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
export const onUpdateClientUserWhitelisting = /* GraphQL */ `
  subscription OnUpdateClientUserWhitelisting(
    $filter: ModelSubscriptionClientUserWhitelistingFilterInput
    $clientId: String
  ) {
    onUpdateClientUserWhitelisting(filter: $filter, clientId: $clientId) {
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
export const onDeleteClientUserWhitelisting = /* GraphQL */ `
  subscription OnDeleteClientUserWhitelisting(
    $filter: ModelSubscriptionClientUserWhitelistingFilterInput
    $clientId: String
  ) {
    onDeleteClientUserWhitelisting(filter: $filter, clientId: $clientId) {
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
export const onCreateClientCallLogs = /* GraphQL */ `
  subscription OnCreateClientCallLogs(
    $filter: ModelSubscriptionClientCallLogsFilterInput
    $tenantId: String
  ) {
    onCreateClientCallLogs(filter: $filter, tenantId: $tenantId) {
      RecordingId
      tenantId
      callId
      contactId
      callType
      callStatus
      callStartTime
      callEndTime
      callDuration
      charge
      callerNumber
      calleeNumber
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClientCallLogs = /* GraphQL */ `
  subscription OnUpdateClientCallLogs(
    $filter: ModelSubscriptionClientCallLogsFilterInput
    $tenantId: String
  ) {
    onUpdateClientCallLogs(filter: $filter, tenantId: $tenantId) {
      RecordingId
      tenantId
      callId
      contactId
      callType
      callStatus
      callStartTime
      callEndTime
      callDuration
      charge
      callerNumber
      calleeNumber
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClientCallLogs = /* GraphQL */ `
  subscription OnDeleteClientCallLogs(
    $filter: ModelSubscriptionClientCallLogsFilterInput
    $tenantId: String
  ) {
    onDeleteClientCallLogs(filter: $filter, tenantId: $tenantId) {
      RecordingId
      tenantId
      callId
      contactId
      callType
      callStatus
      callStartTime
      callEndTime
      callDuration
      charge
      callerNumber
      calleeNumber
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePresolvedAudit = /* GraphQL */ `
  subscription OnCreatePresolvedAudit(
    $filter: ModelSubscriptionPresolvedAuditFilterInput
    $tenantId: String
  ) {
    onCreatePresolvedAudit(filter: $filter, tenantId: $tenantId) {
      id
      tenantId
      resource
      action
      byUser
      byDateTime
      changesMade
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePresolvedAudit = /* GraphQL */ `
  subscription OnUpdatePresolvedAudit(
    $filter: ModelSubscriptionPresolvedAuditFilterInput
    $tenantId: String
  ) {
    onUpdatePresolvedAudit(filter: $filter, tenantId: $tenantId) {
      id
      tenantId
      resource
      action
      byUser
      byDateTime
      changesMade
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePresolvedAudit = /* GraphQL */ `
  subscription OnDeletePresolvedAudit(
    $filter: ModelSubscriptionPresolvedAuditFilterInput
    $tenantId: String
  ) {
    onDeletePresolvedAudit(filter: $filter, tenantId: $tenantId) {
      id
      tenantId
      resource
      action
      byUser
      byDateTime
      changesMade
      createdAt
      updatedAt
    }
  }
`;
