//algo:
//1.create empty arr
//2. iterate arr
//3. apply callback for every el
//4. push el to res if callback true

//input: arr, func
//output: arr

//callback
//input: el, index, array
//output: boolean
//const arr = [2, 3, -5, undefined];
// const callback = (element, index, array) => {
//   if (element > 0) {
//     return true;
//   }
//   return false;
// };

//option 1

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const callbackRes = callback(arr[index], index, arr);
    if (callbackRes) {
      res.push(arr[index]);
    }
  }
  return res;
};

//test data

const array = [10, 5, 4, 6, 9];
const func = (el, index, arr) => {
  if (el > 7) {
    return true;
  } else {
    return false;
  }
};

// console.log(filterArrayElements(array, func));

//option2

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index]);
    }
  }
  return res;
};
//test data
// const array = [10, 5, 4, 6, 9];
// const func = el => el > 7;

// console.log(filterArrayElements(array, func));

//2

const array = [10, 5, 4, 7, 90, 80, 3];
const func = (el, index, arr) => {
  if (arr.length < 5) {
    return true;
  }
  return el > 7;
};
console.log(filterArrayElements(array, func));

//algo:
//1. create empty arr
//2. iterate arr
//3. apply callback for every el
//4. push el to newArr

//input: arr, callback
//output: arr

//callback
//input: el, index, array
//output: el to newArr

const mapArrayElements = (arr, callback) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const Res = callback(arr[index], index, arr);
    newArr.push(Res);
  }
  return newArr;
};
// const Res = (el, index, arr) => el * 2;
const array = [10, 5, 4, 7, 90, 80, 3];
console.log(mapArrayElements(array));

const mapArrayElements = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newEl = callback(arr[i], i, arr);
    result.push(newEl);
  }
  return result;
};
const callback = (el, i, arr) => el * 2;
const array = [10, 5, 4, 7, 90, 80, 3];
console.log(mapArrayElements(array, callback));
