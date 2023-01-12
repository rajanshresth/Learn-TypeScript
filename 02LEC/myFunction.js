"use strict";
exports.__esModule = true;
function addTwo(x, y) {
    return x + y;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUSer(name, age, email) {
    console.log(name, age, email);
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) {
        isPaid = false;
    }
};
var sum = addTwo(2, 3);
console.log(sum);
getUpper("Rajan");
signUpUSer("Rajan", 23, "");
loginUser("Rajan", "", true);
//more about function
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 Ok";
}
var getHello = function (s) {
    return "";
};
var heros = ["Batman", "Superman", "Ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
