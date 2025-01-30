Array.prototype.satifies = function (fn) {
    for (const s of this ?? []) {
        if (fn(s)) return s;
    }
    return undefined;
};

Date.prototype.getDayString = function (): string {
    const day = this.getDay();
    switch (day) {
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thur";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return "Sun";
    }
};

Date.prototype.getMonthString = function (): string {
    const month = this.getMonth();
    switch (month) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        default:
            return "Dec";
    }
};
