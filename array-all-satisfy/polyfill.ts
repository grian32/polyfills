function arrayAllSatisfy(this: any[], predicate: (x: any) => boolean): boolean {
    for (let i of this) {
        // if the predicate is false then stop and return false
        if (!predicate(i)) {
            return false;
        }
    }

    // if the for loop finishes without the predicate being false then its all true so return true
    return true;
}

declare global {
    interface Array<T> {
        allSatisfy(this: any[], predicate: (x: any) => boolean): boolean;
    }
}

let arraysArray = [Array, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, BigInt64Array];

for (let C of arraysArray) {
    Object.defineProperty(C.prototype, "allSatisfy", {
        value: arrayAllSatisfy,
        configurable: true,
        enumerable: false,
        writable: true,
    });
}

export {};