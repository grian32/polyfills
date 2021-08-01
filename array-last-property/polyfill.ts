function arrayGetLastProperty<T>(this: T[]): T {
    return this[this.length - 1];
}

function arraySetLastProperty<T>(this: T[], value: T): T {
    return this[this.length - 1] = value; 
}

declare global {
    interface Array<T> {
        last: T;
    }
}

let arraysArray = [Array, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, BigInt64Array];

for (let C of arraysArray) {
    Object.defineProperty(C.prototype, "last", {
        get: arrayGetLastProperty,
        set: arraySetLastProperty,
    });
}

export {}