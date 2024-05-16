const isRadian = (x) => typeof x === "number" || typeof x === "bigint" ? true : Array.isArray(x) ? x.map((e, i, a) => isRadian(e)) : false;
module.exports = isRadian;