//Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await, we are going to collectively break it down individualy.

//Callbacks.
/*
This are basically funtions that are passed on to other functions as arguments or parameters and the function will be called when there are done with other processes

SYNTAX
function firstFunction(parameters, callback) {
    // do stuff
    callback();
}

Then promises where created to fix the major proplem the callback had which is the way the callback are assigned in the code, many at times when working on a project the indent gets too much and the code can become really hard to follow, e.g below
This is also known as callback hell
firstFunction(para, function() {
    //do stuff
    secondFunction(para, function(){
    thirdFunction(para, function(){
    
    })
    });
});


This was a very complicated way of doing things there had to make it easier with pormises

//Promises:
As the name implies "promises" it means that it would hold on to a reponse or workflow or process or code execution for later then it will deliver it to you when all conditions are met, and also promises will deliver Async code, and since javascript is syncronus (meaning: doing one thing at a time) a promise tends to act different, for E.g 
"it can promise to give you someting tomorrow if you give it something today" or "you go ahead and i will catch up", this is the behaviour in a promise. So in total summary is that a promise can be pending while some other javascript code goes ahead and execute.

Has three state;
1. pending
2. fulfilled
3. Rejected

SYNTAX

const myPromise = new promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("yes! resolved the promise!");
    } else {
        reject("No! rejected the promise.") ;
    }
});

Now as you can observe the syntax of a promise, you can see that a variable is declared using const to catch the pormise which is just an object that takes in two parameters "resolve" & "reject" which are 2 of the three states in a promise, which is also used as a parameter of a nameless function that holds an if statement that carries out either of two posibilities which are "resolve" or "reject" respectively|**            **| But promises also had it errors and it could be fixed by chaining them, this methond brought about "Thenables".

//Thenables

SYNTAX

myPromise.then(value => {
    //doing something
    return something done
})
.then(newValue => {
    //doing more stuff    
})
.catch(err => {
    //do final stuff
    console.error(err);
})

The synatx is the variable created earlier since Thenables are like a fix to the promises all you have to do is take the variable and chain it to a ".then()" object that inside the object a function is made that can do stuff and return it to the variable. If there is an erro you can catch it with the ".catch" at the very end and you acn store an anonymous function as a argument withn its parameters. If an error occurs within our string or even with the mypromise variable, the code will run and the ".catch()" will log it to the console


what happens when you chain thenables, this could also get out of hand thats why we currently use Async and Await


// Async | Await

SYNTAX

const myUsers = {
    //object
}

async function myCoolFunction() {

}

**arrow function

const myCoolFunction = async () => {
    const response = await fetch("API url")    
    const jsonUserData = await response.json();
    return jsonUserData;
}


*/















