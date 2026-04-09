//Arrays 
// collection of items
//  let marks= [98,79,56,78,46];
//  console.log(marks);
//  console.log(marks.length); //property
// //Array is special type of object..
// console.log(marks[1]);
// console.log(marks[3]=66);
// let heroes = ["ironman", "thor", "hulk","spiderman", "sandman","shaktiman"];
// // for(let i=0; i<heroes.length; i++){
// // console.log(heroes[i]);
// // }
// for(let hero of heroes){
//     console.log(hero);
// }
// let cities =["Bengaluru","pune","mumbai","hyderabad","mysore"];
// for(let city of cities ){
//     console.log(city.toUpperCase());
// }
// PQ1
let marks =[89,96,78,95,65];
let sum = 0;
for(let val of marks){
  sum +=val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class =${avg}`);

// PQ2
let items = [250,645,300,900,50];
let idx =0;
// for(let val of items){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer =val/10;
//     items[idx] =items[idx] - offer;
//     console.log(`value after offer =${items[idx]}`);
//     idx++;
// }
for(let i =0; i<items.length; i++){
    let offer =items[idx]/10;
    items[idx] -= offer;
    idx++;
}
console.log(items)

//Array methods
//push() to add items at end
//pop() delete from end & return
//tostring()
let fooditems =["potato","apple","litchi","tomato"];
fooditems.push("chips","burger","paneer");
console.log(fooditems);
let deleteditem = fooditems.pop();
console.log(fooditems);
console.log(deleteditem)
console.log(fooditems.toString());

//concat()- joins multiple arrays and returns result
// let marvelHeroes =["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

//unshift() add at start
// let marvelHeroes =["thor","spiderman","ironman"];
//  marvelHeroes.unshift("antman"); 
//  console.log(marvelHeroes);

 //shift() delete at start
//  let marvelHeroes =["thor","spiderman","ironman"];
//  let val = marvelHeroes.shift();
//  console.log("deleted", val);

 //slice() - returns a piece of the array 
 //slice(startidx,endidx) does not include start index
let marvelHeroes =["thor","spiderman","ironman","superman","batman"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));

//splice(startidx,delcount,newEl1...)
let arr = [1,2,3,4,5,6,7];
//arr.splice(2,0,101,102);
arr.splice(3,1,101);
//pQ1
let companies = ["bloomberg","microsoft","uber","google","IBM","netflix"]
let val = companies.shift();
console.log("deleted" ,val);
companies.splice(1,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
