 // is a single line comment
/* this is multi line comment .*/
console.log("hello world!"); //this code prints hello world on our console window.
// arithemetic operators
// let a=5;
// let b=2;
// let c=a+b;
// console.log("a=",a,"& b =",b);
// console.log("a+b=",c)
// console.log("a-b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a%b=",a%b)
// console.log("a**b=",a**b)//5^2=25

// unary operators
// let a=5;
// let b=2;
// console.log("a=",a,"& b =",b);
// a=a+1; // or a++;
// console.log("a=",a);
// a--;
// console.log("a=",a);
// console.log("++a=",++a); //first it increments the value then prints the value .
// console.log("a++ =",a++);// prints the original value then in next line prints new value, 
// console.log("a=",a);
// this above is same for decrment operators.
//Assignment operators.
// let a=5;
// let b=2;

// a+= 4; //a=a+4
// // a-= 4;
// // a*= 4;
// // a/= 4;
// //a%= 4;
// // a**= 4; a=a**4
// console.log("a=",a); //9

//Comparison operators.
// let a=5;
// let b=2;
// console.log("a==b",a==b); //false
// console.log("a!=b",a!=b); //true
// console.log("a ==b",a==b);
//logical operators
// let a=5;
// let b=6;
// let cond1 =a<b; //true
// let cond2 = a===5; //true
// console.log("cond1 && cond2 =",cond1 && cond2);
// console.log("cond1 || cond2 =",cond1 || cond2);
// console.log("!(a<b) = ",!(a=b));
//if statement 
// let age =25;
// if(age>18){
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you cannot vote");
// }
// let mode ="light";
// let color;

// if(mode ==="dark"){
//     color ="black";
// }
// if(mode ==="light"){
//     color ="white";
// }
// console.log(color);

// // if else statement
// if(mode ="dark"){
//     color ="black";
// }
// else{
//   color = "white";
// }
// console.log(color);
// // if(mode ==="dark") console.log(mode); we can write as this .

// //else-if statement
// if(age<18){
//     console.log("minor");
// }
// else if(age>60){
//     console.log("senior");
// }
// else{
//     console.log("middle");
// }

// ternary operators
// let age =25;
// let result = age >= 18 ? "adult" : "not adult"; // simpler compact if-else 
// console.log(result);
 
// let name = prompt("hello!");
// console.log(name);

// practice question 1
// let num = prompt("enter a number");
// if(num % 5 ===0){
//     console.log(num,"is a multiple of 5");
// }
// else {
//     console.log(num,"is not a multiple of 5")
// }

// practice question
 let score = prompt("enter the score");
 if(score>=90 && score<=100){
    console.log("grade A");
 }
 else if (score>=70 && score<=89){
    console.log("grade B");
 }
 else if(score>=60 && score<=69){
    console.log("grade C");
 }
else if(score>=50 && score<=59){
    console.log("grade D");
 }
else if(score>=0 && score<=49){
    console.log("grade F");
 }