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

// Sort

const sort = (array, order) => {
  let newArray = [];
  let bigger = 0;

  const functionDiff = (arrayY) => {
    if (newArray.length === 0) return false;
    for (let arr = 0; arr < newArray.length; arr += 1) {
      if (newArray[arr] === arrayY) return true; 
    }
  }

  for (let i = 0; i < array.length; i+= 1) {

    for (let y = 0; y < array.length; y += 1) {

      if (array[y] > bigger && !functionDiff(array[y])) bigger = array[y];

      if (y === 7) {
        newArray = [...newArray, bigger]
        bigger = 0;
      }

    }
  }

  if (!order) throw new Error('Use "ASC" or "DESC" order')
  if (order === "DESC") return newArray;
  if (order === "ASC") {
    let newArrayASC = [];
    for (let asc = newArray.length - 1; asc >= 0; asc -= 1) {
      newArrayASC = [...newArrayASC, newArray[asc]];
    }
    return newArrayASC
  }

}

//

sort(arrayForTests, "ASC") // RETURN [1,  2,  3,  4, 5, 15, 23, 52]
sort(arrayForTests, "DESC") // RETURN [52, 23, 15, 5, 4,  3,  2, 1]

//

// forEach

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i])
  }
}

forEach(arrayForTests, (itemArray) => console.log(itemArray)); // ForEach always return undefined;
// console =>
// 5
// 1
// 3
// 4
// 52
// 23
// 15
// 2
// and RETURN UNDEFINED;

forEach(arrayForTests, (itemArray) => itemArray * 2) // RETURN undefined;
forEach(arrayForTests, (itemArray) => itemArray) // RETURN undefined;

//

// Reduce