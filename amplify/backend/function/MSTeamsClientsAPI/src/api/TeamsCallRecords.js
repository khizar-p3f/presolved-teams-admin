const awsconfig = require("./aws-exports");
require("isomorphic-fetch");

console.log("awsconfig is ", awsconfig);

const GRAPHQL_API_KEY = awsconfig.aws_appsync_apiKey;
const GRAPHQL_ENDPOINT = awsconfig.aws_appsync_graphqlEndpoint;

const createTransferToTeams = /* GraphQL */ `
  mutation CreateTransferToTeams(
    $input: CreateTransferToTeamsInput!
    $condition: ModelTransferToTeamsConditionInput
  ) {
    createTransferToTeams(input: $input, condition: $condition) {
      from
      to
      status
      requestedTime
      transferredTime
      id
      createdAt
      updatedAt
    }
  }
`;

const listTransferToTeams = /* GraphQL */ `
  query ListTransferToTeams(
    $filter: ModelTransferToTeamsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransferToTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        from
        to
        status
        requestedTime
        transferredTime
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

class TeamsCallRecords {
  constructor() {
    // Amplify.configure(awsconfig);
  }

  async createTransferRequest(transferToTeams) {
    const variables = transferToTeams;

    const options = {
      method: "POST",
      headers: {
        "x-api-key": GRAPHQL_API_KEY,
      },
      body: JSON.stringify({
        query: createTransferToTeams,
        variables,
        authMode: "API_KEY",
      }),
    };

    const request = new Request(GRAPHQL_ENDPOINT, options);

    try {
      const response = await fetch(request);
      const json = await response.json();
      console.log("Response from the API:----->>> ", json);
      return json;
    } catch (error) {
      console.log("Error calling API: ", error);
      return error;
    }
  }

  async listTransferRequests() {
    const variables = {
      filter: {
        status: {
          eq: "Requested",
        },
      },
    };

    //Get the top record from the list

    const options = {
      method: "POST",
      headers: {
        "x-api-key": GRAPHQL_API_KEY,
      },
      body: JSON.stringify({
        query: listTransferToTeams,
        variables,
        authMode: "API_KEY",
      }),
    };

    const request = new Request(GRAPHQL_ENDPOINT, options);

    try {
      const response = await fetch(request);
      const json = await response.json();
      console.log("Response from the API: ", json);
      return json;
    } catch (error) {
      console.log("Error calling API: ", error);
      return error;
    }
  }
}
module.exports = TeamsCallRecords;
