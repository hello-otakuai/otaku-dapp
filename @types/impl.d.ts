interface Array<T> {
    satifies(fn: (v: T) => boolean): T | undefined;
}
