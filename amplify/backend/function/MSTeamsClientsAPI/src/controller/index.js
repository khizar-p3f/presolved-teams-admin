const clientModel = require("../model/clientModel");

const clientController = {

    init: async (req, res) => {
        try {
            const {  clientID } = req.body;
            let result={
                clientInfo:{},
                clientValidated:false,
                clientID,
                clientConfigurations:{},
                clientUsers:[],
            }
            result.clientInfo =await clientModel.getClient(clientID)
            if(result.clientInfo.data && result.clientInfo.data.getClientSignup.id){
                result.clientConfigurations=await clientModel.getClientConfigurations(clientID);
            }            
            res.status(200).json({result});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    }

}

module.exports = clientController;