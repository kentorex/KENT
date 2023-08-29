// alert('Hello Kent');

// display possibilities
// alert();
// document.write('written from js');
// console.log('Welcome to javascript');


    // let name = prompt('What is your Fullname')
    // let age = prompt('How old are you') 
    // let status = prompt('What is your marital status')
    // let state = prompt('What is your state')
    // let profession = prompt('What is your profession')
    // console.log(`your name is: ${name}`, `your age: ${age}`, `your marital status: ${status}`, `your state: ${state}`, `your profession: ${profession}`)


// confirm('Are you sure you want to delete');

// data types
// numbered data type
//  console.log(typeof 5);

// string
 

// booleans
// true
// false
//  console.log(typeof false);
 
// undefined
// null
// object
// {}
// []

// variable
// var
// let
// const
//  var money = 467;
//  //let age = 24;
 
// //redeclaration of variables
//  var money = 'money';

// //reassignment
//  money = 34;
//  //age = 59;

//  console.log(money);
//  //console.log(age);

//  const pi = Math.PI;
//  console.log(pi);

// camel case
// let hisFathersName ="Austin";
// snake case
// let his_father_sname ="Austin";
// pascal case
// let HisFathersName ="Austin";

// scopes in variables
// global
// local

// function myfunction(){
//     let x = 5; // local scope
//     console.log(x);
// }

// challenge
/* write a JS program that uses prompt function to collect a patient's data and display a detailed information of the user in the console.
Bellow are the data to collect
-Full Name
-Age
-State
-Marital status
-Profession
*/

// operators 
// arithemetic operators
let num = 12
// console.log(5 + 2);
// console.log(5 - 2);
// console.log(5 * 2);
// console.log(5 / 2);
// console.log(5 % 2);

// num++;
// ++num;
// console.log(++num);

// num--;
// console.log(num);

// comparison oparators
// let a = 23;
// let b = '23';
// == (equal)
// console.log(a == b);
// === (identical)
// console.log(a === b);
// != (not equal)
// console.log(a != b);
// !== (not identical)
// console.log(a !== b);
// > (greater than)
// console.log(a > b);
// < (less than)
// console.log(a < b);
// >= (greater than equal)
// console.log(a >= b);
// <= (less than equal)
// console.log(a <= b);


// logical operators
// && (and)
// and table
// T && F = false
// F && T = false
// T && T = true
// F && F = false

// || (or)
// ! (not)

// assignment
// =, +=, -=
// a = 5;
// b = 10;
// a=a+b;
// console.log(a);
// a+=b;
// console.log(a);

// let accountbal = 0;
// let deposit = 50000;
// accountbal += deposit;
// console.log(`you deposited ${deposit} to your account,  \n  and your current balance is ${accountbal}`);
// let withdraw = 30000
// accountbal -= withdraw;
// console.log(`you withdraw ${withdraw} to your account,  \n  and your current balance is ${accountbal}`);

//conditional/tenary operator
// let user = 'Kings';
// user === 'Kings'? console.log(`Welcome ${user}`):console.log('no user found');



// conditional statement
// let tf = prompt('How much do you have')
// if (tf >= 150) {
//     alert('Enter the bus');
// }else{
//     alert('Sorry, yoy can\'t enter. Your tf is not complete')
// }


// if (tf >= 150) {
//     alert('Enter the bus');
// }else if (tf = 100) {
//     alert("Enter the boss, but join the six passengers at the back");
// }else{
//     alert('Sorry, yoy can\'t enter. Your tf is not complete')
// }

// if(tf > 150){
//     alert(`Take your balance ${tf - 150}`);
// }

// let color = 'red';

// switch (color) {
//     case "blue":
//         console.log("Matched blue color");
//         break;
//     case "green":
//         console.log("Matched green color");
//         break;
//     case "red":
//         console.log("Matched red color");
//         break;
//     default:
//         console.log("No match! ");
// }

// bracket notation
// strings are also iterable but they are imutable
// imutable meaning that the value cannot change once created
// let name = 'ikechukwu';
// console.log(name.length);
// console.log(name[2]);
// // let lastname = name[4];

// console.log(lastname);
// console.log( name[name.length - 1]); // to call the last character in the string
// console.log(name[0]); // to get the first character in the string

// let firstname = prompt("Enter your firstname")
// let lastname = prompt("Enter your lastname")
// console.log((`Your first initial is ${firstname[0]} ${lastname[0]}`));
// console.log((`Your second initial is ${firstname[2]} ${lastname[lastname.length - 3]}`));

// function (reapeating lines of codes in different places)
// DRY (don't repeat yourself)
// function functionname() {
//     // a function without parameter
//     // blocks of code
//     alert("Hello Ikechukwu")
// }
// functionname()
// functionname()
// functionname()

// function parameter
// function functionpara(user, account){
//     alert("Hello " + user + " Your account balance is "+ account);
// }
// functionpara('Ugochuukwu',accountbal);
// deposit = 500;
// accountbal += deposit
// functionpara("Ikechukwu", accountbal);
// withdraw = 200;
// accountbal -= withdraw;
// functionpara("ifeanyi", accountbal)

// challenge
// function functionwithArgs(num1, num2) {
//     const sum = num1 + num2
//     console.log('the sum is: ' + sum);
// }
// functionwithArgs(5, 6)
// functionwithArgs(10, 5)

// kinds of function

// function declaration
// function expression
// const multiply2 = function (arg1, arg2){
//     return arg1 * arg2;
// }
// let finalresult = multiply2(4,6);
// console.log((finalresult));
// arrow function
// const sum2 = (arg1,arg2)=>{
//     return arg1 + arg2;
// }
// const sum2 = (arg1, arg2) => arg1 +arg2;

// let finalresult2 = sum2(4,6);
// console.log(finalresult2);



// test data 1
// const dolphinScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];

// to caculate the average score
// const calculateAverageScore = (scores) => {
//     const sum = scores.reduce((total, score) => total + score, 0);
//     return sum / scores.length;
// }

// for both teams
// const dolphinAverage = calculateAverageScore(dolphinScores);
// const kaolasAverage = calculateAverageScore(koalasScores);

//determine the winner
// function finalOutput(dolphin, kaolas) {
//     let minScore = 100
// if (dolphinAverage > kaolasAverage && dolphinAverage >= minScore) {
//     return "dolphins won the trophy";
// }else if (kaolasAverage > dolphinAverage && kaolasAverage >= minScore) {
//     return "kaolas won the trophy";
// } else if (kaolasAverage == dolphinAverage) {
//     return "it is a tie"
// }else {
//     return "the match was canceled or there is no winner"
// }
// }
// console.log(dolphinAverage);
// console.log(kaolasAverage);
// console.log(finalOutput(dolphinAverage, kaolasAverage));


// test data 2
// const dolphinScores2 = [97, 112, 101];
// const koalasScores2 = [109, 95, 106];

// const calculateAverageScore2 = (scores) => {
//     const sum = scores.reduce((total, score) => total + score, 0);
//     return sum / scores.length;
// }

// const dolphinAverage2 = calculateAverageScore(dolphinScores2);
// const kaolasAverage2 = calculateAverageScore(koalasScores2);

// function finalOutput2(dolphin, kaolas) {
//     let minScore2 = 100
// if (dolphinAverage2 > kaolasAverage2 && dolphinAverage2 >= minScore2) {
//     return "dolphins won the trophy";
// }else if (kaolasAverage2 > dolphinAverage2 && kaolasAverage2 >= minScore2) {
//     return "kaolas won the trophy";
// } else if (kaolasAverage2 == dolphinAverage2) {
//     return "it is a tie"
// }else {
//     return "the match was canceled or there is no winner"
// }
// }
// console.log(dolphinAverage2);
// console.log(kaolasAverage2);
// console.log(finalOutput2(dolphinAverage2, kaolasAverage2));


// Array
// const array1 = ["item1", "item2", 23, 9.0, false, null, ['one', 'two']]; //array literal
// const array2 = new Array('item1', 'item2'); // new keyword
// console.log(array1);
// console.log(array1[4]);

// Array method
// pop() used to remove the last item in an array
// array1.pop()
// console.log(array1);
// let poppedItem = array1.pop();
// console.log(poppedItem);

// push() used to add a new item to the last element in an array
// array1.push('new item');
// console.log(array1);

// shift() used to remove the first item in an array
// array1.shift()
// console.log(array1);

// unshift() used to add a new item to the first element in the array
// array1.unshift('added item')
// console.log(array1);

// slice() to remove item and as well used to used to add new items to an array
// const newArray = array1.slice(2, 4);
// const workers = ['ugo', 'too', 'ifeanyi', 'somto', 'kings', 'uche', 'vic']
// const forReward = workers.slice(0,5);
// console.log(newArray);
// console.log(forReward);

// splice()
// console.log(workers);
// workers.splice(1, 3); // using splice to delete
// console.log(workers);
// workers.splice(2, 0, 'Jossy'); //using splice to add item
// console.log(workers);


// loops; it is used to repeat a set of instruction or task 
// for loop; it loops through a code block for a number of times. noteyou already know the numbe of times the loop will run
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// multiplication table using loops
// for(let num = 1; num <= 12; num++){
//     console.log(`10 *${num} = ${5 * num}`);
// }

// for (let i = 0; i < workers.length; i++){
//     console.log(workers[i]);
// }

// While loop; loops through a block of coe while a specified condition is true
// let payDate = 18;
// let currentDate = 6;
// while (currentDate < 30) {
//     console.log(currentDate);
//     if(currentDate == payDate){
//         console.log('Pay workers');
//     }
//     currentDate++;
// }

// object; it is a stand alone entity that has properties and behaviours and it stores data in keys and value case
// const car = {name:'G-wagon',
//  wheels:'4 wheels',
//   mirrow:'two side mirrows'
// }; 
// by objeck literal

// const car2 = new Object();
// car2.name = 'G-wagon';
// car2.wheels = '4 wheels';

// console.log(car);

// fetching item objects using bracket notation and dot notation
// console.log(car['mirrow']);

// console.log(car.wheels); // using dot notation
// for (let x in car) {
//     console.log(car[x]);
// }

// const person = {
//     firstName : 'Ugochukwu',
//     lastName : 'ikechukwu',
//     height : '43.6',
//     complexion : 'dark',
//     age : '18',
//     weight : '34kg',
//     friends : ['vic', 'tochukwu', 'stephen', 'stanley'],
//     action : function(){
//         return `${this.firstName} can run and walk`;
//     },
//     action2 : function(){
//         return `${this.firstName} can eat and do house chores`;
//     },
//     fullName : function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person.action());
// console.log(person.action2());
// (this) keyword
// console.log(person.fullName());
// document.write(person.fullName())
// let hisHeight = person.height;
// console.log(hisHeight);



// function calcTip(billValue) {
//     let tipPercentage;
//     if (billValue >= 50 && billValue <= 300) {
//       tipPercentage = 0.15;
//     } else {
//       tipPercentage = 0.20;
//     }
//     const tipAmount = billValue * tipPercentage;
//     return tipAmount;
//   }
  
//   const testBill = 100;
//   const testTip = calcTip(testBill);
//   console.log("Test Bill amount:", testBill);
//   console.log("Test Tip amount:", testTip);
  
//   const bills = [125, 555, 44];
//   const tips = [];
//   const total = [];
  
  // Calculate tips and totals for each bill
//   for (let i = 0; i < bills.length; i++) {
//     const bill = bills[i];
//     const tip = calcTip(bill);
//     const billTotal = bill + tip;
  
//     tips.push(tip);
//     total.push(billTotal);
//   }
  
//   console.log("Bills:", bills);
//   console.log("Tips:", tips);
//   console.log("Total amounts:", total)