
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

const arrayForTests = [ 5, 1, 3, 4, 52, 23, 15, 2];
const ObjectForTests = [{ age: 2}, { age: 6 }, { age: 5}, { age: 1}, { age: 3}]

const callback = (itemArray) => itemArray < 20
const callback2 = (itemArray) => itemArray > 6;
const callbackObj = (itemArray) => itemArray.age > 3;

filter(arrayForTests, callback);
filter(arrayForTests, callback2);
filter(ObjectForTests, callbackObj);

//

// Find

const Find = (array, callback) => {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
      if (callback(array[i])) {
          newArray = [...newArray, array[i]]
      }
  }
  return newArray;
}

//