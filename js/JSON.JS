//WHAT IS JSON (Javascript Object Notation)
/*
JSON is used to send and recieve data
*/

//How JSON works, e.g.


//This is a typical Javascript Object
const myObj = {
    name: "Elot",
    hobbies: ["eat", "code"],
    hello: function () {
        console.log("Hello!")
    }
}

console.log (myObj.name)

//It works extacly how an object in javascript will work, now how do we parse this to json

//In other to parse or we can say convert the object properties into string we are going to store our javascript object in a const variable like so below and use a method for the conversion.

const sendJSON = JSON.stringify(myObj)
console.log(sendJSON)