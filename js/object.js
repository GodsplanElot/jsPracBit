//This is the simple syntax of object
// what you should know about objects, it comes in a "key: 'Value'" pair
/* const myObj = { name: "Elot"};
console.log(myObj); */

/* This will return date in a format that displays bot the key value pair but if you use the dot notation to chain what key you want to the main object name you will get the value alone printed out in the console. example below */

/* console.log(myObj.name) */


/* objects can store more than just name, this is an example of different datatypes an oject can store */

/* const anotherObj = { 
    alive : true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "iced tea",
    },
    action: function() {
        return "hello world!"; 
        return `Time for ${this.beverage.morning}`;
    }
}*/

//objects can store even anothr object inside it and it is shown above, this is how the object key value pair are accessed and sent to the console.

/* console.log(anotherObj.beverage.morning); */

//This method is called object chaining it is used to access objects within object, to access values in an array, do like so.

/* console.log(anotherObj.hobbies[0]); */

//This will return the first value of the array and log it to the console, you can also use square bracket to acces the key value pair of an object like so below

/* console.log(anotherObj ["alive"]); */


// you can also store a method which is a function insied an object where the fucntion command syntax is stored in the vlaue and this can be any type of logic type, be it "if Statments, Switch Statements, Ternary Operator stament ", this can be seen above in the example and can be used like so below.

/* console.log(anotherObj.action()); */

//Now with the template literal you can refer to other items datatypes stored within the object like so above and you can log it in the console like so below

/* console.log(anotherObj.action()); */



//MAKING A CAR OBJECT

/* const vehicle = {
    wheels: 4,
    engine: function () {
        return "vrrooom!";
    }
} */

//Now we have created a car object, but we could already do that, what if we wanted to create another car object, we have another and more easier way to do this, which is called "inheritance", it is used by passing in the already made object into the the parameter of declared variable like so below, this will pass on all the key value pair to the new object which will inherit all its value and you can add more key value pair to the recently created object lik so in line 62

/* const truck = Object.create(vehicle)
truck.doors = 2; */

// Like so we have created the key door and the value of door, this whole process is called inheritance

