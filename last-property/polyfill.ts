function arrayGetLastProperty(this: any[]): any {
    return this[this.length - 1];
}

function arraySetLastProperty(this: any[], value: any): any {
    this[this.length - 1] = value; 
}

declare global {
    interface Array<T> {
        last: any;
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