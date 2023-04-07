const TeamsCallRecords = require("./api/TeamsCallRecords");

async function TransferToTeams(transferRequest) {
  const teamsCallRecords = new TeamsCallRecords();
  //Check if there are any records in the TransferToTeams table with status Requested
  //If there are, then return the list of records
  //If there are not, then create a new record and
  let callRecords = await teamsCallRecords.listTransferRequests();
  console.log("Call Records are ", JSON.stringify(callRecords));
  if (callRecords.data.listTransferToTeams.items.length > 0) {
    console.log("The current Queue is full. Please try again later");
    return {
      success: false,
      status: "Rejected",
      message: "The current Queue is full. Please try again later",
    };
  } else {
    const variables = {
      input: {
        from: transferRequest.from,
        to: JSON.stringify(transferRequest.to),
        status: "Requested",
        requestedTime: new Date().toISOString(),
      },
    };

    let newTransferToTeams = await teamsCallRecords.createTransferRequest(
      variables
    );
    console.log("Sucessfully placed the Request ", newTransferToTeams);
    return {
      success: true,
      status: "Accepted",
      message: "Your request has been accepted.",
    };
  }
}

module.exports.TransferToTeams = TransferToTeams;
