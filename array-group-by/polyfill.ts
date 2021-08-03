interface GroupedArray<T> {
    [key: string]: T[],
}

function arrayGroupBy<T>(this: T[], predicate: (elem: T) => string): GroupedArray<T> {
    let groupedArr: GroupedArray<T> = {};
    
    for (let i of this) {
        // store the result of the predicate as a variable
        let predicateResult = predicate(i);

        if (groupedArr[predicateResult]) {
            // if the array is already in the object then just push to it
            groupedArr[predicateResult].push(i);
        } else {
            // if the array is not in the object then create it and push to it
            groupedArr[predicateResult] = [];
            groupedArr[predicateResult].push(i); 
        }
    }
    
    return groupedArr;
}


declare global {
    interface Array<T> {
        groupBy(this: T[], predicate: (elem: T) => string): GroupedArray<T>;
    }
}

let arraysArray = [Array, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, BigInt64Array];

for (let C of arraysArray) {
    Object.defineProperty(C.prototype, "groupBy", {
        value: arrayGroupBy,
        configurable: true,
        enumerable: false,
        writable: true,
    });
}

export {};