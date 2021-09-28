'use strict';
// bind
function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};
// console.dir(printMessage);
// console.log(user);
// printMessage('Ukraine', 'Lviv');
// input: context, arg1 ...argN
// output: func

// option 1
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Ukraine', 'Lviv');

// printMessage.bind(user)('Ukraine', 'Lviv');

// // option 2
// const printMessageBinded2 = printMessage.bind(user, 'UK', 'London');
// printMessageBinded2();

// // option 3
// const printMessageBinded3 = printMessage.bind(user, 'Poland');
// printMessageBinded3('Warshaw');

// input: func, context, arg1 ...argN
// output: bindedFunc
function myBind(func, context, ...args) {
  // call
  // input: context, arg1 ...argN
  // output: func result

  // input: the same as func
  // output: func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}
const printMessageBinded = myBind(printMessage, user);
printMessageBinded('Ukraine', 'Lviv');
const printMessageBinded2 = myBind(printMessage, user, 'Poland');
printMessageBinded2('Warshaw');

// eslint-disable-next-line max-classes-per-file
// class Sportsman {
//   constructor(name) {
//     this.name = name;
//   }

//   run() {
//     console.log(`${this.name} is running`);
//   }
// }

// class Swimmer extends Sportsman {
//   constructor(name, style) {
    super(name);
    this.style = style;
  }

//   swim() {
//     console.log(`${this.name} is swimming ${this.style}`);
//   }
// }

// const newSwimmer = new Swimmer('John', 'breaststroke');
// console.log(newSwimmer);
// newSwimmer.run();
// newSwimmer.swim();
