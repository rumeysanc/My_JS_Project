// VARIABLES:
/* 

! var
! let
! const
*/

//* 1. var

console.clear();
// Declaring name variable with no initial value
var name;
console.log(name); //undefined

//Declaring name variable with initial value
var name = "Ahmet";
console.log(name); //Ahmet

var name = "Javascript";
console.log(name); //Javascript

name = "Learning var keyword";
console.log(name);

// Declaring multiple variables
// var fName;
// var lName;

// var fName, lName;

var fName = "John",
  lName = "Cash";
console.log(fName); //John
console.log(lName); //Cash

// Değişkenleri bildirmenin ve başlatmanın en yaygın yolu
var firstName = "Sam";
var lastName = "Walter";
console.log(firstName); //Sam
console.log(lastName); //Walter
console.log(firstName + " " + lastName); //Sam Walter

var num = 5;
console.log(num); //5

var num = 10;
console.log(num); //10

num = "TechPro";
console.log(num); //"TechPro"

//2.let
let num1 = 50;
console.log(num1);

// let num1=55;//"SyntaxError: Identifier 'num1' has already been declared (Tanımlayıcı 'num1' zaten bildirildi)

// console.log(num1)

num1 = true;
console.log(num1);

let num2 = 60;
console.log(num2);

//3. const
const num3 = 3.14;
console.log(num3);

num3 = 4; //Sabit değişkene atama yaparsak
console.log(num3); // TypeError: Sabit değişkene atama.
