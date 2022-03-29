// Test variables;

const arrayForTests = [ 5, 1, 3, 4, 52, 23, 15, 2];
const ObjectForTests = [{ age: 2}, { age: 6 }, { age: 5}, { age: 1}, { age: 3}]

const callback = (itemArray) => itemArray < 20
const callback2 = (itemArray) => itemArray > 6;
const callbackObj = (itemArray) => itemArray.age > 3;

//

// Filter

const filter = (array, callback) => {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
      if (callback(array[i])) {
          newArray = [...newArray, array[i]]
      }
  }
  return newArray;
}

//

filter(arrayForTests, callback); // RETURN [ 5, 1, 3, 4, 15, 2 ]
filter(arrayForTests, callback2); // RETURN [ 52, 23, 15 ]
filter(ObjectForTests, callbackObj); // RETURN [ { age: 6 }, { age: 5 } ]

//

// Find

const Find = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
      if (callback(array[i])) return array[i];
  }
}

//

Find(ObjectForTests, callbackObj); // RETURN { age: 6 }
Find(arrayForTests, callback2); // RETURN 52

//

// Some and Every;

const some = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
      if (callback(array[i])) {
          return true;
      }
  }
  return false;
}

const every = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
      if (!callback(array[i])) {
          return false;
      }
  }
  return true;
}

//

some(ObjectForTests, callbackObj); // RETURN TRUE
some(ObjectForTests, (obj) => obj.age > 20); // RETURN FALSE

every(arrayForTests, callback2); // RETURN  FALSE

every(arrayForTests, (arrayItem) => arrayItem >= 1); // RETURN  TRUE
every(arrayForTests, (arrayItem) => arrayItem > 1); // RETURN  FALSE

//

// Map

const map = (array, callback) => {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const map = callback(array[i]);
    newArray = [...newArray, map]
  }
  return newArray;
}

const callbackCreateOBJ = (itemArray) => ({
  value: itemArray,
  double: itemArray * 2,
})

map(arrayForTests, (itemArray) => itemArray * 2) // RETURN [10, 2, 6, 8, 104, 46, 30, 4]

map(arrayForTests, callbackCreateOBJ);
// RETURN [ { value: 5, double: 10 },
//   { value: 1, double: 2 },
//   { value: 3, double: 6 },
//   { value: 4, double: 8 },
//   { value: 52, double: 104 },
//   { value: 23, double: 46 },
//   { value: 15, double: 30 },
//   { value: 2, double: 4 } ]

//