//Event and Responding to events.
//before you can interact with the DOM, you have to make sure your DOM is fylly loaded

//Syntax for adding an eventlistener
// .addEventListener("event (e.g click)", function, useCapture)

//This is the basic syntax of an event listener, you listen or wait for an event to happen which can be a click or hover or drag etc, there are so many events but you basically wait for an event to happen then the resonpse that is assigned will kick in, so for eg, lets define a function and give a simple example

const doSomething = () => {
    alert ("doing something");
};

//This is a basic function, lets attach this to the event listener, and lets make it such that when the h2 is clicked the function will be executed.

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

//The code above is selecting the h2 element, we first selects the div that the h2 element is located and store it to a variable, then we chain the variable to another queryselector and store the result in another variable. we then create an eventg listener for the click event

h2.addEventListener("click", doSomething, false);

