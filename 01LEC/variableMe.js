"use strict";

exports.__esModule = true;

// 1. Variable declaration
var greetings = "Rajan";
greetings.toUpperCase();
console.log(greetings);


// numbers
var age = 30;
var score = 34.56;
var num = score.toFixed(2);
console.log(num);


// boolean
var isMarried = true;
var isLogin = false;
var a = isLogin.valueOf();
console.log(a);


// string
var firstName = "Rajan";
var Name = firstName.toUpperCase();
console.log(Name);


// any => 1.you don't want a particular to cause typechecking error
// 2. you don't want to check the type of the variable
var hero;
function getHero() {
    return "RJN";
}
hero = getHero();
