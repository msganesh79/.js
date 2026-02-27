//Event
//the change in the state of an object is known as Event
 //Events are fired to notify code of "interesting changes "that may affect code execution.
 //mouse event
 //keyboard events
 //form events
 //print event 
 let btn1=document.querySelector("#btn1");
 btn1.onclick =()=>{
    console.log("Button 1 is clicked");
    let a=25;
    a++;
    console.log(a);
    }
   //  btn1.onclick =()=>{
   //      console.log("HANDLER 2");
   //  }
   
   //  btn1.onclick =(e)=>{
   //      console.log(e.target);
   //      console.log(e.type)
   //      console.log(e.clickX);
   // }
let box=document.querySelector("div");
 box.onmouseover =(e)=>{
   //  console.log("you are in div");
     console.log(e.target);
        console.log(e.type)
        console.log(e.clientX, e.clientY);
 }
 //Event Object
 //It is a special object that has details about an event.
 //All event handlers have access to the event Object's properties and methods.
 //node.event=(e)=>{
   //handle here
 //}
 //e.target gives the element that triggered the event'
//e.type gives the type of event

//Event  listeners
//Event listeners are functions that are called when an event occurs.
//Node.addEventListener("event", callback);
//Node.removeEventListener("event", callback);
//callback reference should be same for add and remove event listener.

btn1.addEventListener("click",(e)=>{
   console.log("Button 1 is clicked");
   console.log(e.target);
        console.log(e.type)

});
btn1.addEventListener("click",()=>{
   console.log("Button 1 is clicked -handler 2");
});
const handler3 =()=>{
   console.log("Button 1 is clicked -handler 3");
};
btn1.addEventListener("click",handler3);

//remove event listener
btn1.removeEventListener("click",handler3);

//PQ
let modebtn=document.querySelector("#mode");
let currentMode="light";//change to dark

modebtn.addEventListener("click",()=>{
   if(currentMode=="light"){
      currentMode ="dark";
      document.querySelector("body").style.backgroundColor="black";
   } else{
      currentMode="light";
      document.querySelector("body").style.backgroundColor="white";
   }
   console.log(currentMode);
});



