function arrayRemoveFalsey<T>(this: T[]): T[] {
    let newArr: T[] = [];

    for (let i of this) {
        if (i) {
            newArr.push(i);
        } 
    }

    return newArr;
}

declare global {
    interface Array<T> {
        removeFalsey(this: T[]): T[];
    }
}

let arraysArray = [Array, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, BigInt64Array];

for (let C of arraysArray) {
    Object.defineProperty(C.prototype, "removeFalsey", {
        value: arrayRemoveFalsey,
        configurable: true,
        enumerable: false,
        writable: true,
    });
}

export {};