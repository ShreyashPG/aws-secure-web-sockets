const handleSocketDisconnect = async (event, context) =>{
    try{

        const connectionId = event.requestContext.connectionId;
        await dynamodbConnector.removeScoket(connectionId);

        return {
            statusCode : 200, 
            headers :{
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
            },
            body : 'Socket successfully removed.'
        }
    }
    catch(err){
        console.error('Unable to remove socket connection', err);
        return {
            statusCode: 500,
            headers :{
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
            },
            body :'Unable to remove socket.'
        }
    }
}