import React from "react";
import { API, Auth } from "aws-amplify";

async function createUser() {
  //Get Values from form
  /*const name = document.forms["createUser"]["name"].value;
  const email = document.forms["createUser"]["email"].value;
  const password = document.forms["createUser"]["password"].value;
  const role = document.forms["createUser"]["role"].value;*/

  const name = "siva2@gmail.com";
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
    </div>
  );
};

export default SuperAdminIndexPage;
