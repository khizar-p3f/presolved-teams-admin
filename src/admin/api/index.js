import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
export const getClientIntegration = async (clientId) => {
    return new Promise((resolve, reject) => {
        try {
            API.graphql({
                query: queries.listClientIntergrations,
                variables: {
                    clientId: clientId
                },
            }).then((response) => {
                resolve(response.data.listClientIntergrations.items[0]);
            }).catch((error) => {
                throw error;
            })
        } catch (error) {
            console.error({
                getClientIntegration: error
            });
            reject(error);
        }
    })
}


export const updateLoginWithMS = async (clientIntegration) => {
    return new Promise((resolve, reject) => {
        try {
            API.graphql({
                query: mutations.createClientIntergrations,
                variables: {
                    input: clientIntegration
                }
            }).then((response) => {
                resolve(response.data.updateClientIntergrations);
            }).catch((error) => {
                throw error;
            })
        } catch (error) {
            console.error({
                updateClientIntegration: error
            });
            reject(error);
        }
    })

}