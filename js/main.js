/* Single letter form name generator*/

/* let myName = "Godsplan";

console.log(myName.charAt(Math.floor(Math.random() * myName.length))) */

/* Stops here */

/*
if (condition) {
    // run some code;
} else if {
    //run some other code;
} else {
    if (condition) {
        //run nested code;
    } else {
        run other nested code; 
    }
}
    

*/


/* let soup = "Chicken noodle soup"
let reply;

if (soup) {
    reply = `Here's your order of ${soup}`;
}else {
    reply = `Sorry, we're out of ${soup}`;
}

console.log(reply); */




//SWITCH STATEMENTS

/* switch (expression OR value) {

    case choice:
        //run this set of code
        break;

    case choice2:
        //run this different code
        break;

        //add as many cases as needed
    
    default:
        //run this if no case matches
        //no need to break here
} */


// Conditionals: Ternary operator

// Basic Syntax structure of a tenary operator

// condition ? ifTrue : ifFalse;

//How to chain ternary operator

    //condition:ifTrue:condition:ifTrue:condition:ifTrue:condition:condition:condition





//******************** USER INPUT  *****************************

//User Input
//alert('just prints out message to the consloe, "doesnt take any input "')
//confirm("ok === true\ncancel === False"); ** this takes in a value of true or false and it can be received or captured and stored in a variable**
//let myBoolean = confirm("Okay = True \ncancel = false")
//console.log(myBoolean)

//****** now there is one more input method to get a string or a number and store it in a variable *****

//let name = prompt("please enter your name.");
//console.log(name);

//*** Now what if the user clicks on cancel this will return a null value back to us and we can not do anything to null value so we have to redirect a meassge like an if and else statement to catch a string response that can be stored or assigned to a variable in a variable this method or operator is called the "nullish coalescing operator" works it is represented by two "??" right after the varible to be printed out ***/

//let name = prompt("please enter your name.");
//console.log(name ?? "you didn't enter your name");

//**** Now what if the user doenst input any data, we are not prepared for that, here's how we fix ****/

//let name = prompt("please enter your name.");
//if (name) {
  //  console.log(name);
//} else {
  //  console.log("you didn't enter your name.")
//}

//***** You can also check for the amount of white space the user will leave in the input from the promt command this will ensure your database will not be overlaged white spaces and slowed down, how to do it ******/

//let name = prompt("please enter your name.")
//if (name) {
  //  console.log(name.length);
    //console.log(name.trim().length);
    //console.log(name.trim());
//} else {
  //  console.log("you didn't enter your name")
//}



//**************** LOOPS *********/

//Types of loops in Java Script

//****** WHILE LOOPS **********
//Syntax

//while(condition is true) {
    //start the loop
//}

//*** So what the loops bsiclly does it that it runs it self infintly untill the condition is specified and if not the code will run forever ***/


//*** DO WHILE LOOPS ***/
//syntax

//do {
    //run this as long as
//} while (//this is satisfied)

//but at least he runs the outcome  before executing the code once before making sure the logic runs well but since its real not met it will run till it true

//*** FOR LOOPS ***/
//Syntax

//for (condition){
    // run this code if the condition is met
//}

//you can declare the variable in the same line as the condition and also increment it in the same parenthesis as the condition or you can choose to put it before the loop or outside the loop.

for (let i = 0; i <= 10; 1++ ) {
    console.log(i);
}