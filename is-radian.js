const isRadian = (x) => {
    if (typeof x === "number") return true;
    else if (typeof x === "bigint") return true;
    else if (Array.isArray(x)) return x.map((element, index, arr) => isRadian(element));
    return false;
}

module.exports = isRadian;