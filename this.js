var shweta={
firstname:function(){
console.log("name is shweta");
console.log(this===shweta);
}
};

shweta.firstname();


function default1(){
console.log(this===global);
}

default1();