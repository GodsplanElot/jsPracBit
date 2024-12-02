//This is how we declare a function or create a function
/* function name(params) {
    // return function LOgic ☣;
} */

//how the function is used
//.name(param)

//There are different types of function structure

//*************** The nameles function, the function is stored in the variable like so
/* const myVar = function (params) {
    //return function logic ☣;
} */


//How the function is used
//.myVar(param)


//******************** The arrow Function

/* const myvar = (params) => {
    // return function logic⚡⚡
} */


//How the function is used
//.myVar(paramIFany)

//WE CAN ALSO USE FUNCTIONS TO CREATE OBJECTS, THIS IS KNOWN AS THE FACTORY FUNCTION AND THE SYNTAX FOLLOWS BELOW.

//Factory Function
/* function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} pizza.`)
    }
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */
