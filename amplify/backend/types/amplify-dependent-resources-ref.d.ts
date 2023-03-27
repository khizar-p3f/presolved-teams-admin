export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "presolvedteamsadmine76efdae": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "p3fAdminGroupRole": "string",
            "p3fSupportGroupRole": "string",
            "tenantAdminGroupRole": "string",
            "tenantSupervisorGroupRole": "string",
            "tenantUserGroupRole": "string"
        }
    },
    "function": {
        "AdminQueriescecc2b38": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "LambdaExecutionRoleArn": "string"
        },
        "MSTeamsClientsAPI": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "presolvedteamsadmin": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "PresolvedClientAPI": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
  },
  "auth": {
    "presolvedteamsadmine76efdae": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "p3fAdminGroupRole": "string",
      "p3fSupportGroupRole": "string",
      "tenantAdminGroupRole": "string",
      "tenantSupervisorGroupRole": "string",
      "tenantUserGroupRole": "string"
    }
  },
  "function": {
    "AdminQueriescecc2b38": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}