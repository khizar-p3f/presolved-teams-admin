/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClientSignup = /* GraphQL */ `
  subscription OnCreateClientSignup {
    onCreateClientSignup {
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
  subscription OnUpdateClientSignup {
    onUpdateClientSignup {
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
  subscription OnDeleteClientSignup {
    onDeleteClientSignup {
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
  subscription OnCreateClientUsers {
    onCreateClientUsers {
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
  subscription OnUpdateClientUsers {
    onUpdateClientUsers {
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
  subscription OnDeleteClientUsers {
    onDeleteClientUsers {
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
  subscription OnCreateClientIntergrations {
    onCreateClientIntergrations {
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
  subscription OnUpdateClientIntergrations {
    onUpdateClientIntergrations {
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
  subscription OnDeleteClientIntergrations {
    onDeleteClientIntergrations {
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
  subscription OnCreateClientUserWhitelisting {
    onCreateClientUserWhitelisting {
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
  subscription OnUpdateClientUserWhitelisting {
    onUpdateClientUserWhitelisting {
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
  subscription OnDeleteClientUserWhitelisting {
    onDeleteClientUserWhitelisting {
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
  subscription OnCreateClientCallLogs {
    onCreateClientCallLogs {
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
  subscription OnUpdateClientCallLogs {
    onUpdateClientCallLogs {
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
  subscription OnDeleteClientCallLogs {
    onDeleteClientCallLogs {
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
  subscription OnCreatePresolvedAudit {
    onCreatePresolvedAudit {
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
  subscription OnUpdatePresolvedAudit {
    onUpdatePresolvedAudit {
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
  subscription OnDeletePresolvedAudit {
    onDeletePresolvedAudit {
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
