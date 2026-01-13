const obj = {
    "orderId": 12345,
    "customerName": "John Doe",
    "items": [
        {
            "productId": 987,
            "productName": "Amul Lactose Free Milk",
            "quantity": 4,
            "price": 25
        },
        {
            "productId": 654,       
            "productName": "MuscleBlaze Whey Protein",
            "quantity": 2,
            "price": 5289
        }
    ],
    "shippingAddress": {
        "street": "123 Main St",
        "city": "Springfield",
        "state": "IL",
        "zipCode": "62701"
    },
    "isPaid": true,
    isdeprecated: false
}

console.log(obj);
console.log(obj.customerName);
console.log(obj.orderId);
console.log(obj["customerName"]);
var a = 'shippingAddress';
console.log(obj[a]);
console.log(obj.a);
// zipcode of the shipping address
var zipcode = obj?.shippingAddress?.zipCode;
console.log(zipcode);
// Updating an object
obj.customerName = "Albus Dumbledore";
console.log(obj.customerName);
obj["isdeprecated"] = true;
console.log(obj.isdeprecated);
obj.shipmentId = "033857HX330";
console.log(obj);
delete obj.shipmentId;
console.log(obj);
