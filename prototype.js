function user(){
this.name="";
this.point=100;
this.givepoint=function givepoint(receiver){
receiver.point+=1;
console.log(this.name+"gives point to"+receiver.name)
}

}

var shweta=new user();
var nilesh=new user();

//shweta.givepoint(nilesh);
console.name="shweta";
console.name="nilesh";

shweta.givepoint(nilesh);
console.log("shweta:"+shweta.point);
console.log("nilesh:"+nilesh.point);

user.prototype.uppercut=function uppercut(receiver){
receiver.point-=2;
console.log(this.name+"just uppercut"+receiver.name);
};

nilesh.uppercut(shweta);
console.log("shweta"+shweta.point);
console.log("nilesh"+nilesh.point);

user.prototype.magic=10;
console.log(shweta.magic);
console.log(nilesh.magic);