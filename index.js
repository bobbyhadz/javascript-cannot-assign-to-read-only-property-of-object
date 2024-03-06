// Cannot assign to read only property of Object in JavaScript

// EXAMPLE 1 - Creating a copy of the array or object

// ✅ With OBJECTS
const obj = {
  name: 'James',
};

Object.freeze(obj);

const objCopy = {...obj}; // 👈️ create copy
objCopy.name = 'Alice';
console.log(objCopy); // 👉️ {name: 'Alice'}

// --------------------------------------

// ✅ With ARRAYS
const arr = ['a', 'b', 'c'];

Object.freeze(arr);

const arrCopy = [...arr]; // 👈️ create copy
arrCopy[0] = 'z';
console.log(arrCopy); // 👉️ ['z', 'b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Trying to sort a read-only array

// const arr = ['a', 'b', 'c'];

// Object.freeze(arr);

// // 👇️ create copy
// const arrCopy = [...arr];

// // 👇️ sort the copy
// arrCopy.sort();

// console.log(arrCopy); // 👉️ [ 'a', 'b', 'c' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Set `writable` to `true` if using `Object.defineProperties()`

// const obj2 = {};

// Object.defineProperties(obj2, {
//   country: {
//     value: 'Germany',
//     writable: true, // 👈️ set property to writable
//   },
// });

// obj2.country = 'Austria';

// console.log(obj2.country); // 👉️ "Austria"
