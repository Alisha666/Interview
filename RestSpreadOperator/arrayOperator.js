//Rest - rest operator combines the numbers that you supply or the elements that you pass

function sum(a,b,c,...rest){
    let res = a+b+c;
    console.log(rest);
    console.log(rest[2]);
    return res;
}

console.log(sum(10,20,30,40,50,10,30));

//Spread - spread is the opposite of rest operator it will divide the  combine numbers
var names=["Ram","Shyam","Mohan","Bipin"];

function getNames(name1, name2, name3,name4){
    console.log(name1, name2, name3,name4);
}

// getNames(names[0],names[1],names[2]);
getNames(...names);
  