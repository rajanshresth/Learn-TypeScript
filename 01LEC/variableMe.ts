// 1. Variable declaration
let greetings: string = "Rajan"

greetings.toUpperCase()

console.log(greetings)

export {}


// numbers
let age: number = 30
let score: number = 34.56
let num = score.toFixed(2)
console.log(num)

// boolean
let isMarried: boolean = true
let isLogin: boolean = false

let a=isLogin.valueOf()
console.log(a)

// string
let firstName: string = "Rajan"
let Name = firstName.toUpperCase()
console.log(Name)


// any => 1.you don't want a particular to cause typechecking error
// 2. you don't want to check the type of the variable
let hero:string;

function getHero(){
    return "RJN"
}

hero = getHero()