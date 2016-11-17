function placeorder(ordernumber){
console.log("customer no.",ordernumber);

cookanddeliverfood(function(){
console.log("deliver food order",ordernumber);

});
}


function cookanddeliverfood(callback){
setTimeout(callback,5000);
}

placeorder(1);
placeorder(2);
placeorder(3);