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


let soup = "Chicken noodle soup"
let reply;

if (soup) {
    reply = `Here's your order of ${soup}`;
}else {
    reply = `Sorry, we're out of ${soup}`;
}

console.log(reply);