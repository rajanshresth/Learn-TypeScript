var score = 33;
score = "33";
var rjn = {
    name: "Hitesh",
    id: 1
};
rjn = { username: "Hitesh", id: 1 };
/* function getDbId(id: number | string): number {
    return id.toLowerCase();
} */
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
var data = [1, 2, 3, 4, "5"];
var pi = 3.14;
//pi=3.15; // value of pi can only be 3.14
var seatAllotment = "aisle";
//seatAllotment = "middle";
