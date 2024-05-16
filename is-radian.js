const isRadian = (x) => (typeof x === "number") ? true : (Array.isArray(x)) ? x.map((e, i, a) => isRadian(e)) : false;
module.exports = isRadian;