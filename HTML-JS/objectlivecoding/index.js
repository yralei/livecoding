// algo
// func getCustomersList
// input: obj
// output: obj[]

// get keys and values
// add each key as id to own values
// return new array ( input obj must not be changed )
// sort

const customer = {
  'id-user-2': {
    name: 'Tom',
    age: 17,
  },
  'id-user-1': {
    name: 'Bob',
    age: 19,
  },
  'id-user-4': {
    name: 'Lena',
    age: 23,
  },
  'id-user-3': {
    name: 'Jack',
    age: 78,
  },
};
// bad option
// const getCustomersList = (obj) => {
//   // for map
//   // input: callback
//   // otput: arr

//   // input: arr
//   // otput: obj
//   return Object.entries(obj).map((arr) => {
//     console.log(arr);

//     let obj = { id: arr[0] };

//     console.log(obj);

//     const value = arr[1];

//     obj = { ...obj, ...value };

//     console.log(obj);

//     return obj;
//   })
//   .sort((a, b) => a.age - b.age);

// };

// console.log(getCustomersList(customer));
// good
// const getCustomersList = (obj) => {

//   return Object.entries(obj)
//     .map(arr =>  ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// console.log(getCustomersList(customer));

//best

const getCustomersList = (obj) =>
  Object.entries(obj)
    .map(([id, customerObj]) => ({ id, ...customerObj }))
    .sort((a, b) => a.age - b.age);

console.log(getCustomersList(customer));
