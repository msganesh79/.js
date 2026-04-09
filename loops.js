  //loops are used to execute a piece of code again and again .
// for loop
for(let count  =1;count<=5; count++){
    console.log("apna college");
}
console.log("loop as ended");
 
// calculate sum of 1 to n
// let sum =0;
// let n=10;
// for(i=1; i<=10; i++){
//     sum=sum+i;
// }
// console.log("sum =",sum);
 
// for(i=1; i<=5;i++){
//     console.log("i=",i);
// }
 //  A loop that never ends Infinite loop.

// for(i=1; i>=0;i++){
//     console.log("i=",i);
// }

// While loop 

// while(condition){
//     lines of code
// }
// let a= 1;
// while(a<=5){
//     console.log("a =",a);
//     a++;
// }

//do-while loop

// do{
//     code
// }while(condition);
// let i=1  ;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);
 
 //for-of loop

// for(let val of strVar){
// val is variable and strvar is a string variable.
// iterator -> characters
// some lines of code 
//}
 // for-of and for-in loops
 // for-of loops helps in making loops on strings and arrays.
// let str ="javascript";
// let size =0;
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log("string size=",size);

 // for-in loop
// it is used in  making loops on objects and arrays. 
//for(let key in obj){
//}
// let student ={
//     Name:"Rahul kumar",
//     age:25,
//     cgpa:7.5,
//     ispass:true,
// };
// for(let key in student){
//     console.log("key= ",key , "value= ",student[key]);
// }

//print all even numbers from 0 to 100
// for(let num=0;num<=100;num++){
//     if(num%2 ===0){
//         console.log("num=",num);
//     }
//     else{

//     }
// }
// game 
// let gameNum =25;
// let userNum = prompt("Guess the game number:");
// while(userNum  != gameNum){
//  userNum  = prompt("you entered wrong number.Guess again :");
// }
// console.log("congratulations ,you entered the right number");

//string is a sequence of characters used to represent text.
// create string 
let str ="Apna college";
let str1='shradda';
// above both are accepted 

// inbuilt properties of strings
//string length
//str.length
console.log(str.length);
console.log(str[2]); //n

//Template literals in JS
// A way to have embedded expressions in strings
 let specialstring = `This is template literal`;
 console.log(specialstring);
 console.log(typeof specialstring);

 let obj ={
    item:"pen",
    price: 10,
 };
 console.log("cost of", obj.item ,"is", obj.price ,"rupees");
 // above is normal type with strings and objects
// the below will be written in template literals form
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
// string interpolation 
//to create strings by doing substitution of placeholders.
// `string text ${expression/variable} string text`
//the  value of embedded placeholders will calculate and print during run time .

// Escape characters
//  \n-next line  \t-tab space 
console.log("apna\ncollege")

// String methods
// these are built-in functions to manipulate a string.
// these methods will not change the original string it will return new value.
// strings are immutable in javascript 
//str.touppercase()
let str2 = "Apna college ";
let newstr = str.toUpperCase();
console.log(newstr);

//sgtr.tolowercase()
let str3 = "Apna college ";
let newstr1 = str3.toLowerCase();
console.log(newstr1);

//str.trim( )
//removes whitespaces
 let str4 ="   Ganesh s mydur   ";
 console.log(str4.trim());

 //str.slice(start ,end?); 
 //returns the part of the string
 //excludes the end index value
 let str5 ="helloworld";
 console.log(str5.slice(0, 5)); 

 //str1.concat(str2)
 //joins str2 with str1
 let str6 ="Ganesh";
 let str7 ="mydur";
 console.log(str6.concat(str7));

// str.replace(searchVal, newVal)
let str8 = "hello";
console.log(str8.replace("lo" ,"p"));

//str.charAt(idx);





