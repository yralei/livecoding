/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */
function getSenseOfLife() {
  return 42;
}
console.log(getSenseOfLife());

function getSenseOfLife() {
  console.log(42);
}

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

function getSquared(n) {
  return n ** 2;
}
console.log(getSquared(10));
console.log(getSquared(0));
console.log(getSquared(-4));

/* ф-ция sum должна принимать два числа и вернуть их сумму */

function sum(a, b) {
  return a + b;
}
console.log(sum(4, 6));
console.log(sum(4, 6));
console.log(sum(4, 6, 90));

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

function sum(num) {
  return 'I am ' + num + ' years old';
}
console.log(sum(34));

function getMessage(num) {
  console.log('I am ' + num + ' years old');
}
console.log(getMessage(20));
console.log(getMessage(76));

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */
const mult = (a, b) => a + b;
console.log(mult(9));
console.log(mult(-5, 8));

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */
const square = (number) => number ** 2;

console.log(square(9));
console.log(square(7));
/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

const getMagicNumber = () => 17;
console.log(getMagicNumber(17));
