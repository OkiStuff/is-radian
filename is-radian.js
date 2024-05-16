const isRadian = (x) => Array.isArray(x) ? x.map((e, i, a) => isRadian(e)) : typeof x === "number" || typeof x === "bigint";
module.exports = isRadian;