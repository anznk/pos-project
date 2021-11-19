function creatOrderHandler(body){
    fooditems = JSON.parse(body).fooditems
    drinkitems = JSON.parse(body).drinkitems

        if (fooditems == null || drinkitems == null) {
            response = {
                statusCode: 400,
                headers: { "Access-Control-Allow-Origin": "*" },
                'body': JSON.stringify({ "error": "Food or Drink items not found" })
            }
        }
    response = {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        'body': JSON.stringify({ "fooditems": fooditems, "drinkitems": drinkitems })
    }
    return response;
}

function getItems(){
    response = {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        'body': JSON.stringify(mockItems())
    }

    return response;
}

function mockItems(){
    return {
        items: [
            {
                FII: 'UUID1',
                name: 'Toast with eggs',
                price: '9.89',
            },
            {
                DII: 'UUID1',
                name: 'Pepsi',
                price: '4.99',
            }
        ]
    }
}

exports.creatOrderHandler = creatOrderHandler;
exports.getItems = getItems;