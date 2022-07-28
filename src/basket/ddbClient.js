// Create service client module using ES6 syntax
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// create an Amazon DynamoDB service client object
const ddbClient = new DynamoDBClient();
export { ddbClient };