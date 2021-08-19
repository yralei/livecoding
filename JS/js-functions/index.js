//algo
// 1.iterate from 2 to num
// 2. check every num if prime
//2.1 iterate form from 2 to N
//2.2 check if num % index === 0 - not prime

//input:
//output:
// function getPrimes(num) {
//   for (let index = 2; index <= num; index += 1) {
//     let isPrime = true;
//     console.log('check index' + index + 'is prime');

//     for (let number = 2; number < index; number += 1) {
//       console.log('check if number % index' + number);

//       if (index % number === 0) {
//         console.log('number is not prime' + number + ' ' + index);
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(index);
//     }
//   }
// }
// getPrimes(15);

//input: number
//output: boolean
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}
getPrimes(15);
