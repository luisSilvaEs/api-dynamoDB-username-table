# api-dynamoDB-username-table

This repository contains the CRUD operations over a table of users created in DynamoDB.
The operations are hosted in Lambda funcions, each operations has its own Lambda function, each Lambda is linked to
an API Gateway which performs as _endpoint_ for the operation.

The DynamoDB table contains one single key:

- username: string

However, it is expected to store the following data:

```
{
	username: "string",
	email: "string",
	password: "string"
}
```

Notice how _email_ nor _password_ are part of the table.

