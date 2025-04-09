const handleSocketConnect= async (event , context) => {

    try{
        const connectionId = event.requestContext.connectionId;
        const connectionType = event.queryStringParameters.connectionType;
        await dynamodbConnector.registerSocket(connectionId, connectionType);


        return {
            statusCode: 200,
            headers :{
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
            },
            body :'Socket successfully registered.'
        };
    }
    catch(err){
        console.error('Unable to initialize socket connection', err);
        return {
            statusCode: 500,
            headers :{
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
            },
            body :'Unable to register socket.'
        }
    }
}