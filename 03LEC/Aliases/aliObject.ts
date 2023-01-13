type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User){
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email:"", isActive: true})



//READONLY
type Users = {
    name: string;
    email: string;
    isActive: boolean;
    readonly _id: number; //readonly property
    credit?: number; //optional property
}

// function createUsers(user: Users){
//     return {name: "", email: "", isActive: true, _id: 1}
// }

let myUser: Users ={
    name: "Rajan",
    email: "nr@r",
    isActive: false,
    _id: 1
}

//use of  &
type User1 = {
    cardNum: number;
}
type User2 = {
    cardNum: number;
}

type User3 = User1 & User2 &{
    cvv: number;
};



export {}
