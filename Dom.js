// let div =document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector(".para");
// console.log(para.getAttribute("class"));
// // getAttribute() method is used to retrieve the value of a specified attribute from an HTML element. It takes the name of the attribute as an argument and returns its value as a string. If the attribute does not exist, it returns null.

// let para1 = document.querySelector(".para");
// console.log(para1.setAttribute("class" ,"new-class"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "blue";
// div.style.backgroundColor = "green";
// div.style.fontSize = "20px";
// div.innerText = "Hello!";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";
// console.log(newBtn);

// let div1 = document.querySelector("div");
// // div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "Welcome to JavaScript!";
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector(".para");
// para.remove();

// newHeading.remove();
//PQ
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);

