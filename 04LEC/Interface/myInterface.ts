interface myInterface {
    // readonly dbId: number;
    email: string;
    password: string;
    // confirmPassword?: string;
    startTrail: () => string;
    getCoupon(CoupanCode: string): string;
}
interface Admin extends myInterface {
    role: "admin";
}


const Rajan: Admin = {
    email: "sth@rn", 
    password: "123",
    role: "admin",
    startTrail: () => {
        return "Trial Started";
    },
    getCoupon: (CoupanCode: "string") => {
        return "Coupon Applied";
    }
}
