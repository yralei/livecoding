// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

// input: obj, obj
// output: boolean

// function compareObjects(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }
// console.log(compareObjects(obj1, obj2));

//function compareObjects(obj1, obj4) {
//  return Object.entries(obj1).toString() === Object.entries(obj4).toString();
//}
//console.log(compareObjects(obj1, obj4));

// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true

// Object.entries(k1).toString() === Object.entries(k2).toString();
// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};
// option 1
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let index = 0; index < keys1.length; index += 1) {
    const key = keys1[index];
    // const key2 = keys2[index];
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) {
      return false;
    }
  }
}
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj3, obj4));
console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj3, obj2));

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};
// option 1 good//
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return !keys1.some((key) => obj1[key] !== obj2[key]);
}
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj3, obj4));
console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj3, obj2));
