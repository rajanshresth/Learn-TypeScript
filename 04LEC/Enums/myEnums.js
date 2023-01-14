/* const BuddhaIr = 0
const BuddhaEn = 1
const BuddhaFr = 2

if (seat === 0){
    // BuddhaIr
} */
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["BuddhaIr"] = 0] = "BuddhaIr";
    SeatChoice[SeatChoice["BuddhaEn"] = 1] = "BuddhaEn";
    SeatChoice[SeatChoice["BuddhaFr"] = 2] = "BuddhaFr";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.BuddhaIr; // 0
var SeatChoiceComp;
(function (SeatChoiceComp) {
    SeatChoiceComp["BuddhaIr"] = "Irish";
    SeatChoiceComp["BuddhaEn"] = "English";
    SeatChoiceComp["BuddhaFr"] = "French";
})(SeatChoiceComp || (SeatChoiceComp = {}));
var rnSeat = SeatChoiceComp.BuddhaIr; // "Irish"
