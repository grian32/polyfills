function arrayGetFirstProperty<T>(this: T[]): T {
    return this[0];
}

function arraySetFirstProperty<T>(this: T[], value: T): T {
    return this[0] = value; 
}

declare global {
    interface Array<T> {
        head: T;
    }
}

let arraysArray = [Array, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, BigInt64Array];

for (let C of arraysArray) {
    Object.defineProperty(C.prototype, "head", {
        get: arrayGetFirstProperty,
        set: arraySetFirstProperty,
    });
}

export {}