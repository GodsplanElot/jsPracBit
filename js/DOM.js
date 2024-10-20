//DOM is all about selecting the objects or properties through a very unique way, E.g below.

const view1 = document.getElementById("view1");
console.log(view1)

//This will search the document object model (DOM) of your index file and look for an assigned id of the element that posseses "view1" and when its found it will will be logged to the console as instructed. We can also seclect the DOM with more than that, the most common to be used is stated below.

const view2 = document.querySelector("#view2");
console.log(view2);

//Now The difference between the two ways is that the ".getElementById" will select only id properties, but the ".querySelector" can select the ID, the CSS class, the element. it is a universal selector and there are more types of selector. like the "getElementByClass", E.g below.

