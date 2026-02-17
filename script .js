//function is a block of code that performs a specific task and can be reused multiple times in a program. It is defined using the function keyword followed by a name, parentheses, and curly braces. Functions can take parameters and return values.
//function declaration/definition 
// syntax: function functionName(parameters) {
//          // code to be executed
//         }
function greet(name) {
    //parameter "name" is used to receive the value passed when the function is called.
    console.log("Hello, " + name + "!");      
}
//function call 
//function call is the process of invoking a function to execute its code. It is done by using the function name followed by parentheses, and passing any required arguments if the function has parameters.
//functionName();
greet("Alice"); // Output: "Hello, Alice!"
//arguments (Alice) are the values passed to a function when it is called.

//function expression
// syntax: const functionName = function(parameters) {
       // code to be executed  }

 function add(a, b) {
    // local variables-> scope  a and b are used to receive the values passed when the function is called.
    s = a + b; //return statement is used to specify the value that a function should return after it has finished executing. It allows the function to produce an output that can be used elsewhere in the program.
    return s;
}
let result = add(5, 3); 
console.log(result); // Output: 8

//function functionName(parameters) {
//     // code to be executed
//     return value; // optional, used to return a value from the function
// }

//arrow function: compact way of writing a function expression. It uses the =>  which implicitly returns the value.
// syntax: const functionName = (parameters) => {
       // code to be executed  }    
// function multiply(x, y) {
//     return x * y;
// }
const multiplyArrow = (x, y) =>{ x * y; // concise body syntax for single expression.
 return x*y;
};
 //PQ
 function countvowels(str){
    let count = 0;
    for(const char of str){
      if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        count++;
      }
    }
    return count;
  }
  
  //forEach loop
  //forEach loop is a method that allows you to iterate over an array and execute a provided function once for each element in the array. 
//
  //syntax: array.forEach(callBackfunction) {
//          // code to be executed for each element
//         });
//  A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. 
  let arr = [1, 2, 3, 4, 5];
  arr.forEach(function(element) {
    console.log(element);
  });
//array.forEach(val, index ,array) {
//     // code to be executed for each element
//     // val is the current element being processed in the array
//     // index is the index of the current element being processed in the array
//     // array is the array that forEach is being called upon
//   }

//Higher-order function
//A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. 
//PQ
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num * num);
});

//Map 
//creats a new array with the results of some operation.
// the value of the new array is determined by the return value of the callback function provided to the map method.
//arr.map(callbackFnx(value,index,array) {
//     // code to be executed for each element
//     }
let nums = [1, 2, 3, 4, 5];
nums.map((val) => {
  console.log(val);
});

//Filter
//creates a new array with all elements that pass the test implemented by the provided function.
//arr.filter(callbackFnx(value,index,array) {
//     // code to be executed for each element }
let array = [1, 2, 3, 4, 5]; 
let evenNumbers = array.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//Reduce
//executes a reducer function on each element of the array, resulting in a single output value.
//arr.reduce(callbackFnx(accumulator,currentValue)=>accumulator +currentValue, initialValue) {
   // code to be executed for each element }
let arr1 = [1, 2, 3, 4, 5];
const output = arr1.reduce((res,curr) =>{
    return res > curr ? res : curr;
});
console.log(output); // Output: 5

//PQ
let score = [96, 98, 87, 69, 50,91];
let toppers =score.filter((val) => val > 90);
console.log(toppers); // Output: [96, 98, 91]   

//PQ
let n = prompt("Enter a number:"); 
let arr3 =[];
for(let i=1; i<=n; i++){
  arr3[i-1] = i; // 1(0),2(1),3(2),4(3),5(4)
}
console.log(arr3); // Output: [1, 2, 3, 4, 5]
let sum = arr3.reduce((res,curr) => {
  return res + curr;
}, 0);
console.log(sum); // Output: 15 

let Factorial = arr3.reduce((res,curr) => {
  return res * curr;
}, 1);
console.log(Factorial); // Output: 120 

