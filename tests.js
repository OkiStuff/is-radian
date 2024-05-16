var isRadian = require("is-radian"); // is this right???

const checkIsRadian = (x) => {
    console.log(isRadian(x));
}

checkIsRadian("NOT a radian"); // false
checkIsRadian(22); // true
checkIsRadian(3.14); // true
checkIsRadian([5,2,3,4,5,7,3, 3.14, "not a radian"]); // [true,true,true,true,true,true,true, true, false]