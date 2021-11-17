// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    if (event.resource === "/pointofsale/getitems") {
        response = {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            'body': JSON.stringify(getItems())
        }
    } else if (event.resource === "/pointofsale/createorder") {
        response = {
            statusCode: 200,
            'body': JSON.stringify({}) 
        }
    }else{
        try {
            // const ret = await axios(url);
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'hello world',
                    
                })
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
    return response
};

function getItems(){
    return {
        "items": [
            {
                "id": "1",
                "name": "Coca Cola",
                "price": "1.00",
                "quantity": "1",
                "total": "1.00"
            },
            {
                "id": "2",
                "name": "Pepsi",
                "price": "1.00",
                "quantity": "1",
                "total": "1.00"
            }
        ]
    }
}