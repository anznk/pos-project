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
        'body': JSON.stringify(getItems())
    }

    return response;
}

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

exports.creatOrderHandler = creatOrderHandler;
exports.getItems = getItems;