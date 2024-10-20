//DOM is all about selecting the objects or properties through a very unique way, E.g below.

/* const view1 = document.getElementById("view1");
console.log(view1) */

//This will search the document object model (DOM) of your index file and look for an assigned id of the element that posseses "view1" and when its found it will will be logged to the console as instructed. We can also seclect the DOM with more than that, the most common to be used is stated below.

/* const view2 = document.querySelector("#view2");
console.log(view2); */

//Now The difference between the two ways is that the ".getElementById" will select only id properties, but the ".querySelector" can select the ID, the CSS class, the element. it is a universal selector and there are more types of selector. like the "getElementByClassName", E.g below.

/* const views = document.getElementsByClassName("view");
console.log(views); */


//The line of code above will select all the class with the value of "view", because it is using the instruction ".getElement's'ByClassName". As you can notice it is in plural, as its refers to all the class name, this is a good way to select all lots of class properties at once
//When we target this id or value and store them in the variable we can futher go to manipulate the DOM, for example we alter the css display and so many more,E.g below.

/* view1.style.display = "flex";
view2.style.display = "flex"; */

//This line of code above changes the CSS properties of the view1 and view2, it directly targets the css properties and apply it to the element. We can also select mutiple properties at once using the querySelector as shown below.

const sameViews = document.querySelectorAll(".view")
console.log(sameViews);

//Now the selector used above works in junction with how the properties i dentify their self, for e.g when trying to select a class you will use the "." and when you are trying to select and id you will use the "#"
