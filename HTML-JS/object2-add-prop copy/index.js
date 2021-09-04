//input: stringArr, arr2
//output: obj

// algo:
// reduce

// algo
// 1. create res obj
// 2. iterate keyList
// 3. get value by index
// 4. add key-value to the object
const keys = ['name', 'adress', 'age', 'run'];
const values = [
  'Bob',
  'Ukraine',
  '34',
  () => {
    console.log('run');
  },
];

function buildObject(keysList, valuesList) {
  const obj = {};
  for (let index = 0; index < keysList.length; index += 1) {
    const key = keysList[index];
    const value = valuesList[index];
    Object.assign(obj, { [key]: value });
  }
  return obj;
}
const result = buildObject(keys, values);
console.log(result);
result.run();

const buildObject = (keys, values) => {
  return keys.reduce((acc, key, index) => {
    console.log('Step ' + index);
    console.log('acc ', acc);
    console.log('key ' + key);
    console.log('value ' + values[index]);

    return { ...acc, [key]: values[index] };
  }, {});
};

const keys = ['name', 'adress', 'age'];
const values = ['Bob', 'Ukraine', '34'];
console.log(buildObject(keys, values));

const keys = ['name', 'adress', 'age', 'run'];
const values = [
  'Bob',
  'Ukraine',
  '34',
  () => {
    console.log('run');
  },
];
// option bad
function buildObject(keysList, valuesList) {
  let obj = {};
  for (let index = 0; index < keysList.length; index += 1) {
    obj = { ...obj, [keysList[index]]: valuesList[index] };
  }
  return obj;
}
const result = buildObject(keys, values);
console.log(result);
result.run();

// option good reduce
const buildObject = (keys, values) => {
  return keys.reduce((acc, key, index) => {
    console.log('Step ' + index);
    console.log('acc ', acc);
    console.log('key ' + key);
    console.log('value ' + values[index]);

    return { ...acc, [key]: values[index] };
  }, {});
};
// test data
const keys = ['name', 'adress', 'age', 'city'];
const values = ['Bob', 'Ukraine', '34', 'New York'];
console.log(buildObject(keys, values));

const buildObject = (keys, values) =>
  keys.reduce((acc, key, index) => ({ ...acc, [key]: values[index] }), {});

// test data
const keys = ['name', 'adress', 'age', 'city'];
const values = ['Bob', 'Ukraine', '34', 'New York'];
console.log(buildObject(keys, values));
