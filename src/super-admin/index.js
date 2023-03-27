import React from "react";
import { API, Auth } from "aws-amplify";

async function createUser() {
  //Get Values from form
  /*const name = document.forms["createUser"]["name"].value;
  const email = document.forms["createUser"]["email"].value;
  const password = document.forms["createUser"]["password"].value;
  const role = document.forms["createUser"]["role"].value;*/

  const name = "siva3@gmail.com";
  const email = name;
  const password = "#P3Fusion135";
  const role = "tenantUser";

  const apiName = "AdminQueries"; // replace this with your api name.
  const path = "/users"; //replace this with the path you have configured on your API
  const myInit = {
    body: {
      username: name,
      email: email,
      password: password,
      groupname: role,
      userAttributes: JSON.stringify([
        {
          Name: "name",
          Value: name,
        },
        {
          Name: "custom:tenantId",
          Value: "tenantId1",
        },
      ]),
    }, // replace this with attributes you need
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    }, // OPTIONAL
  };

  // Alternatively, with Cognito User Pools use this:
  // return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
  // return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }

  API.post(apiName, path, myInit)
    .then((response) => {
      // Add your code here
      console.log("Response from CreateUser API is ", response);
    })
    .catch((error) => {
      console.log(error.response);
    });
}

async function listUsers() {
  const apiName = "AdminQueries"; // replace this with your api name.
  const path = "/listUsers"; //replace this with the path you have configured on your API
  const myInit = {
    // OPTIONAL
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    }, // OPTIONAL
  };

  API.get(apiName, path, myInit)
    .then((response) => {
      // Add your code here
      console.log("Response from ListUsers API is ", response);
    })
    .catch((error) => {
      console.log(error.response);
    });
}

async function listTeamsUsers() {
  const apiName = "PresolvedClientAPI"; // replace this with your api name.
  const path = "/teams/users"; //replace this with the path you have configured on your API
  const myInit = {
    queryStringParameters: {
      tenantId: "b0a714c6-6ab2-43b2-aae0-5e855bb3752f",
      displayName: "Siv",
    },
    // OPTIONAL
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    }, // OPTIONAL
  };

  console.log("Calling MSTeamsClientsAPI API with ", myInit);

  API.get(apiName, path, myInit)
    .then((response) => {
      // Add your code here
      console.log("Response from ListTeamsUsers API is ", response);
    })
    .catch((error) => {
      console.log("Error calling API ", error);
    });
}

const SuperAdminIndexPage = () => {
  return (
    <div>
      <h1>Super Admin Index Page</h1>
      <br></br>
      <p>Create User</p>
      <form
        name="createUser"
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br></br>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <br></br>
        <label>
          Role:
          <input type="text" name="role" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      <br></br>
      <p>List Users</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          //listUsers();
          listTeamsUsers();
        }}
      >
        List Users
      </button>
    </div>
  );
};

export default SuperAdminIndexPage;
