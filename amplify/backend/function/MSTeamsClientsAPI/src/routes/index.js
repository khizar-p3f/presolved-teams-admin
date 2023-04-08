const clientController = require("../controller")

const Routes = (app) => {

    app.get('/teams/init',clientController.init)


}

module.exports = Routes
