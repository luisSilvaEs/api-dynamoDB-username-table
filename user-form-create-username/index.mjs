//To add a username
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-2" }));

export const handler = async (event, context) => {

  try {
    //console.log("Event", event);
    const username = event;
    
    
    const newUserName = event;
    console.log("New Username", newUserName);

    const params = {
      TableName: 'react-challenges-user-registration-form_user-ids',
      Item: newUserName,
    };
    
    await dynamoDb.send( new PutCommand( params ) )
    
    return {
      statusCode: 201,
      body: JSON.stringify({ message: '"Username" created successfully' }),
    };
    
  } catch (error) {
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to create user', error: error.message }),
    };
    
  }
};