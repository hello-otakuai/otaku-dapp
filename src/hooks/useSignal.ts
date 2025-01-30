import { useState } from "react";

export class Signal<T> {
    private _inner: T;
    constructor(initial: T) {
        this._inner = initial;
    }

    public get value(): T {
        return this._inner;
    }

    public set value(v: T) {
        this._inner = v;
    }
}

export function useSignal<T>(initialValue: T): Signal<T> {
    const [innerValue, setInnerValue] = useState(initialValue);

    const signal = new Signal(innerValue);
    signal.value = innerValue;

    return {
        get value() {
            return signal.value;
        },
        set value(newValue: T) {
            setInnerValue(newValue);
            signal.value = newValue;
        },
    } as Signal<T>;
}
