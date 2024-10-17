//This is the simple syntax of object
// what you should know about objects, it comes in a "key: 'Value'" pair
/* const myObj = { name: "Elot"};
console.log(myObj); */

/* This will return date in a format that displays bot the key value pair but if you use the dot notation to chain what key you want to the main object name you will get the value alone printed out in the console. example below */

/* console.log(myObj.name) */


/* objects can store more than just name, this is an example of different datatypes an oject can store */

const anotherObj = { 
    alive : true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "iced tea"
    }
}

//objects can store even anothr object inside it and it is shown above, this is how the object key value pair are accessed and sent to the console.

console.log(anotherObj.beverage.morning)

//This method is called object chaining