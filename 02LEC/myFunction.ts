function addTwo(x: number, y: number): number {
    return x + y;
}


function getUpper(val:string):string{
    return val.toUpperCase();
}

function signUpUSer(name:string, age:number, email:string){
    console.log(name, age, email);
}

let loginUser = (name:string, email: string,isPaid: boolean)=> {
    if (isPaid === void 0) { isPaid = false; }
}


const sum=addTwo(2, 3);
console.log(sum);
getUpper("Rajan")
signUpUSer("Rajan", 23, "")
loginUser("Rajan","", true)

//more about function

function getValue(myVal:number):boolean | string{
    if(myVal > 5){
        return true
    }
    return "200 Ok"
}

const getHello = (s:string):string => {
    return ""
}

const heros = ["Batman", "Superman", "Ironman"]

heros.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export {}