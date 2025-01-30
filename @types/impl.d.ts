interface Array<T> {
    satifies(fn: (v: T) => boolean): T | undefined;
}

interface Date {
    getDayString(): string;
    getMonthString(): string;
}