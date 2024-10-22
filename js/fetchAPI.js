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
"it can promise to give you someting tomorrow if you give it something today" or "you go ahead and i will catch up", this is the behaviour in a promise

Has three state;
1. pending
2. fulfilled
3. Rejected
*/















