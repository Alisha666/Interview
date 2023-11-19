let object = {
    name:"Alisha",
    city:"Ranchi",
    getIntro: function(){
        console.log(this.name+"from"+this.city);
    }
}
console.log(object.name);

let object2={
    name:"Biswajeet"
}

object2.__proto__ = object;
console.log(object.getIntro());
console.log(object2.getIntro());