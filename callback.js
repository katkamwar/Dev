function placeAnOrder(orderNumber){
console.log("customer order:",orderNumber);

cookAndDeliverFood(function(){
console.log("Delivered food order:",orderNumber);

});
}

function cookAndDeliverFood(callback){
setTimeout(callback,5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);