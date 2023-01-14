let score:number | string  = 33;
score = "33";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let rjn: User | Admin = {
    name: "Hitesh",
    id: 1
}

rjn = { username: "Hitesh", id: 1 }

/* function getDbId(id: number | string): number {
    return id.toLowerCase();
} */

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    }

}

const data: (number | string)[] = [1, 2, 3, 4, "5"];

let pi:3.14=3.14;

//pi=3.15; // value of pi can only be 3.14


let seatAllotment: "aisle" | "window" | "middle" = "aisle";
//seatAllotment = "middle";
