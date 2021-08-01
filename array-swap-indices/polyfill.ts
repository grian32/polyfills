function arraySwapIndices(this: any[], x: number, y: number): boolean {
    try {
        // assign elem values to variables;
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

Object.defineProperty(Array.prototype, "swapAt", {
    value: arraySwapIndices,
    configurable: false,
    enumerable: false,
    writable: true,
})

export {};