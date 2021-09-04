/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
// element[ yourKey ] = yourValue;
// input: obj, string, string
// output: obj
const transaction = {
  value: 170,
};
// function addPropertyV1(obj, key, value) {
//   transaction['currency'] = 'USD';
//   return transaction;
// }
// console.log(addPropertyV1(transaction, 'currency', 'USD'));
// console.log(transaction);


// function addPropertyV2(obj, key, value) {
//   //input: target(object), sources (object).....source N (obj)
//   //output: new object
//   return Object.assign(obj, { [key]: value });
// }
// console.log(addPropertyV2(transaction, 'currency', 'USD'));
// // console.log(transaction);

// function addPropertyV3(obj, key, value) {
//   //input: target(object), sources (object).....source N (obj)
//   //output: new object
//   return Object.assign({}, obj, { [key]: value });
// }
// console.log(addPropertyV3(transaction, 'currency', 'USD'));
const transaction = {
  value: 170,
  check: () => {
    console.log('hello')
  }
};
function addPropertyV4(obj, key, value) {
const resObj = {...obj, [key]: value, }
return resObj
}
console.log(addPropertyV4(transaction, 'currency', 'USD'));
console.log(addPropertyV4(transaction, 'country', 'Ukraine'));
console.log(transaction);
transaction.city = 'Lviv';
console.log(transaction);
console.log(addPropertyV4(transaction, 'color', 'yellow'));
console.log(transaction);


const transaction = {
  value: 170,
};
addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }


const numbers = [10, 23, 5, 9, 9]
console.log(numbers);
console.log(...numbers);
const numberCopy = [...numbers, 45, 66];
console.log(numberCopy);

const transaction = {
  value: 170,
};
const transCopy = { ...transaction };
console.log(transCopy);



// rest operator

function sum(param1, ...params) {
  console.log(param1);
  console.log(params)
  return params.reduce((acc, el) => {
    acc += el;
    return acc;
  })
}
// test data
// sum(1, 2, 3, 55)
console.log(sum(1, 2, 3, 55));

//
const numRest = [10, 11, 18, 7, 0]

const [firstElement, ...restArr] = numRest
console.log(firstElement);
console.log(restArr);

const restArrCopy = [...restArr]; // spread
console.log(restArrCopy);



const restArr;
const [num1, num2] = numRest

// data destruct

const numRest = [10, 11, 18, 7, 0]
const firstElement;
const restArr;

const numbersRest = [10, 12, 45, 5];
const [firstEl, ...rest] = numbersRest;
console.log(firstEl);
console.log(rest);
