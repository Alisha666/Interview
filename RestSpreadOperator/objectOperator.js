//Rest

var student={
    name:"Alisha",
    age: 26,
    hobbies:["Basketball","Dance"]

}
//destructuring
const {age,...rest} = student;
console.log(age,rest);

//Spread

var newStudent={
    ...student,
    age:45
}

console.log(newStudent);