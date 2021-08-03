# array-group-by

Adds a `groupBy` function to arrays and typed arrays.

This function takes a callback that gives the element and must return a string.

This will group the elements into an object of arrays based on what string it returned.

Example:

```ts
const array = [1, 2, 3, 4, 5];

array.groupBy(i => {
  return i % 2 === 0 ? 'even': 'odd';
});

// =>  { odd: [1, 3, 5], even: [2, 4] }
```