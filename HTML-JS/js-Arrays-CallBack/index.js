/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

//input: none
//output: numbers
const numbersList1 = [1, 2, 3, 4, 5];
console.log(numbersList1);
const res = numbersList1.pop();
console.log(res);
console.log(numbersList1);

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

//input: num
//output: arr.length
const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push ' + numbersList2);
const res2 = numbersList2.push(100);
console.log('output push arrLength' + res2);
console.log('after push ' + numbersList2);

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

//input: none
//output:arr.langth
const numbersList3 = [1, 2, 3, 4, 5];
console.log(numbersList3);
const res3 = numbersList3.shift();
console.log('output push arrLength' + res3);
console.log(numbersList3);

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

//input: num
//output:arr.langth
const numbersList4 = [1, 2, 3, 4, 5];
console.log(numbersList4);
const res4 = numbersList4.unshift(90);
console.log('output push arrLength' + res4);
console.log(numbersList4);

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

//slice()
//input: num, num(optional)
//output:arr
const numbersList5 = [1, 2, 3, 4, 5];
const res5 = numbersList4.slice(2);
console.log(res5);
console.log(numbersList5);

// CALLBACK!!!!!
//input: num, num, callback
//output: undefined
function sum(from, to, printer) {
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  printer(sum);
}
//input: num, num, callback
//output: undefined
function printResult(res) {
  alert(res);
}
sum(5, 8, printResult);

//input: callback
//output: new arr
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
const res6 = anotherNumbersList;

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here
