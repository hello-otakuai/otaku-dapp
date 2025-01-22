Array.prototype.satifies = function (fn) {
    for (const s of this ?? []) {
        if (fn(s)) return s;
    }
    return undefined;
};
