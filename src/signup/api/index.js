import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

export const createSignup = async (data) => {
  return new Promise((resolve, reject) => {
    try {
      let createSignupData = {
        ...data,
        address: " ",
        city: " ",
        state: " ",
        zip: " ",
        country: " ",
      };
      API.graphql({
        query: mutations.createClientSignup,
        variables: { input: createSignupData },
      })
        .then((response) => {
          // create client users if signup is successful
          console.log({ createSignup: response.data });
          createClientUser({
            ...data,
            tenantId: response.data.createClientSignup.id,
            company: undefined,
            phone: undefined,
          })
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              throw error;
            });
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.error({
        createSignup: error,
      });
      reject(error);
    }
  });
};

export const createClientUser = async (data) => {
  return new Promise((resolve, reject) => {
    try {
      API.graphql({
        query: mutations.createClientUsers,
        variables: {
          input: {
            ...data,
            role: "tenantAdmin",
            status: 1,
          },
        },
      })
        .then((response) => {
          console.log({ createClientUser: response.data });
          resolve(response.data);
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.error({
        createClientUser: error,
      });
      reject(error);
    }
  });
};

export const getClientInformation = async (emailId) => {
  return new Promise((resolve, reject) => {
    try {
      API.graphql({
        query: queries.listClientUsers,
        variables: {
          filter: {
            email: {
              eq: emailId,
            },
          },
        },
      })
        .then((response) => {
          console.log({
            getClientInformation: response.data.listClientUsers.items[0],
          });

          getClientSignup(response.data.listClientUsers.items[0].tenantId)
            .then((clientInfo) => {
              console.log({ getClientInformation: clientInfo });
              let result = {
                ...response.data.listClientUsers.items[0],
                ...clientInfo,
              };
              resolve(result);
            })
            .catch((error) => {
              throw error;
            });
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.error({
        getClientUsers: error,
      });
      reject(error);
    }
  });
};

export const getClientSignup = async (id) => {
  return new Promise((resolve, reject) => {
    try {
      API.graphql({
        query: queries.getClientSignup,
        variables: {
          id: id,
        },
      })
        .then((response) => {
          resolve(response.data.getClientSignup);
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.error({
        getClientSignup: error,
      });
      reject(error);
    }
  });
};
