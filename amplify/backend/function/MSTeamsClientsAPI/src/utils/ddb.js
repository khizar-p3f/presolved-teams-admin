const AWS = require('aws-sdk');

class DynamoDB {
  constructor() {
    this.ddb = new AWS.DynamoDB.DocumentClient();
  }

  async writeToAuditTable(data) {
    const params = {
      TableName: 'PresolvedAudit',
      Item: data,
    };
    return this.ddb.put(params).promise();
  }

    async listFromAuditTable(filter, limit, nextToken) {
        const params = {
            TableName: 'PresolvedAudit',
            FilterExpression: '#resource = :resource AND #action = :action',
            ExpressionAttributeNames: {
                '#resource': 'resource',
                '#action': 'action',
            },
            ExpressionAttributeValues: {
                ':resource': filter.resource.eq,
                ':action': filter.action.eq,
            },
            Limit: limit,
        };
        if (nextToken) {
            params.ExclusiveStartKey = {
                id: nextToken,
            };
        }
        const result = await this.ddb.scan(params).promise();
        return {
            items: result.Items,
            nextToken: result.LastEvaluatedKey ? result.LastEvaluatedKey.id : null,
        };
    }

}

module.exports = DynamoDB;
