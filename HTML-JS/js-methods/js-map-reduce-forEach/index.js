// начальный массив

//input:arr
//output:new arr
const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log('numbersList before map =>' + numbersList);
//input: func, obj(optional)
//output:new arr

// callback
//input: number, index(opt), arr(opt)
//output: num
//option1========================================================
// const mapRes = numbersList.map(function(el, index,array) {
//   return el * el;
// });
// console.log(mapRes)
// console.log('numbersList after map =>' + numbersList);

//Option2=========================================================
const mapRes = numbersList.map((el) => el * el);

console.log(mapRes);
console.log('numbersList after map =>' + numbersList);

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// put your code here

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

const numbersList2 = [5, 0, 8, 10, -4, 50, 220];
console.log('numbersList find =>' + numbersList2);
//input: callbackFn
//output:num || undef

//callbackFn
//input: number, index(opt), arr(opt)
//output:num || undef
// const findRes = numbersList2.find((el) => {
//   if (el % 2 === 0 && el > 0) {
//     return true;
//   }
//   return false;
// });
// console.log(findRes);
// console.log('numbersList after find =>' + numbersList2);

const findRes = numbersList2.find((el) => el % 2 === 0 && el > 0);
console.log(findRes);
console.log('numbersList after find =>' + numbersList2);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

const numbersList1 = [5, 0, 8, 10, -4, 50, 220];
//input: callbackFn
//output:undef

//callbackFn
//input: number, index(opt), arr(opt)
//output:undef
const forEachRes = numbersList1.forEach((el) => {
  console.log('before forEach =>' + numbersList2);
  if (el > 0) {
    console.log(el);
  }
});
console.log(forEachRes);
console.log('after forEach =>' + numbersList2);
//=========================================================================================

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
//input: callbackFn, num(acc initial value, optional)
//output: value

//callbackFn
//input:acc(num), number, index(opt), arr(opt)
//output:number

const sumTrans = transactions.reduce((acc, el) => {
  console.log('step: ' + index + 'acc is: ' + acc);
  acc += el;
  return acc;
});
console.log(sumTrans);

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList000 = [6, 20, 33, 43, 8];

// put your code here
