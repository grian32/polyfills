function arraySwapIndices<T>(this: T[], x: number, y: number): boolean {
    try {
        // assign elem values to variables
        let elemOne = this[x];
        let elemTwo = this[y];

        // swap
        let temp = elemOne;
        elemOne = elemTwo;
        elemTwo = temp;

        // reassign
        this[x] = elemOne;
        this[y] = elemTwo;

        return true;
    } catch (e) {
        return false;
    }
}

declare global {
    interface Array<T> {
        swapAt(this: T[], x: number, y: number): boolean;
    }
}

let arraysArray = [Array, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, BigInt64Array];

for (let C of arraysArray) {
    Object.defineProperty(C.prototype, "swapAt", {
        value: arraySwapIndices,
        configurable: true,
        enumerable: false,
        writable: true,
    });
}

export {};