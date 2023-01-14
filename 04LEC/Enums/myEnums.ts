/* const BuddhaIr = 0
const BuddhaEn = 1
const BuddhaFr = 2

if (seat === 0){
    // BuddhaIr
} */

enum SeatChoice {
    BuddhaIr,
    BuddhaEn,
    BuddhaFr
}

const seat = SeatChoice.BuddhaIr; // 0


enum SeatChoiceComp{
    BuddhaIr = "Irish",
    BuddhaEn = "English",
    BuddhaFr = "French"
}

const rnSeat = SeatChoiceComp.BuddhaIr; // "Irish"
