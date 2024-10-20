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

/* const sameViews = document.querySelectorAll(".view")
console.log(sameViews); */

//Now the selector used above works in junction with how the properties i dentify their self, for e.g when trying to select a class you will use the "." and when you are trying to select and id you will use the "#"


// while we can select the id or class property of a section in our html page, we can go deeper to select more html element within the section, e.g Below.

/* const divs = view1.querySelectorAll("div");
console.log(divs); */

// Now as you can see from above we are storing the value of the method chaining in a variable called "divs" but before that happens we first take the class or id and attach the ".querySelectorAll()" methon to it this will properly scan the entire section for all the properties within it and return it as a node list in the console. But if you want the properties to return as a proper html collection instead of a node list, e.g below.

/* const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs); */

//This applies to the ".querySelectorAll()" this will also check the DOM for all occurence of the tag name div and log it to the console.


//You can do so many things with the DOM manipulation, one very interesting one is to insert HTML code inside your DOM, e.g  below,

/* const navText = document.querySelector("nav h1");
console.log(navText); */

//The line of code above as stated in the parameter of the ".querySelector("**params**")" selects the nav html tag then inside that it selects the h1 tag .

/* navText.textContent = "hello world"; */

//The line of code above goes futher to attach a method to the variable that stores the selection of the nav section and the h1 element tag, the method attached to it has a functionality to re-asign the text content to the of the variable it is chained to, so as stated above the new h1 in the nav section should say "hello world" now. TO insert HTML and not just text you can use the "innerHTML", e.g below;

/* const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p> This should align right.</p>`; */

//We can futher go on to change the style e.g below.

/* console.log(navbar);
navbar.style.justifyContent = "" */