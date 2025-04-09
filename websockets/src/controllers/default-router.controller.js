const defaultSocketHandler = async(event, context)=>{

    try{
        const data = JSON.parse(event.body);
        const action =data.action;

        const connectionId= event.requestContext.connectionId;

        switch(action){
            case 'PING':
                const pingResponse =  JSON.stringify({action : 'PING', value :'PONG'});
                await apigatewayConnector.generateSocketMessage(connectionId, pingResponse);
                break;
            default : 
                const invalidResponse =JSON.stringify({action :'ERROR', error : 'Invalid Request'});
                await apigatewayConnector.generateSocketMessage(connectionId, invalidResponse);

        }

        return {
            statusCode: 200,
            headers :{
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
            },
            body :'Default socket response.'
        };
    
    }
    catch(err){
        console.error('Unable to handle default socket connection', err);
        return {
            statusCode: 500,
            headers :{
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
            },
            body :'Unable to handle default socket.'
        }
    }
}