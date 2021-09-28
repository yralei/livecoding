class Sportsman {
  constructor(name) {
    console.log(this);
    this.name = name;
  }
  run() {
    console.log('context is ' + this);
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, swimStyle) {
    super(name);
    this.swimStyle = swimStyle;
  }
  swim() {
    console.log(`${this.name} is swimming ${this.swimStyle}`);
  }
}

const obj1 = { name: 'James' };
console.log(obj1);
const obj = new Sportsman('John');
console.log(obj);
const obj3 = new Sportsman('Max');
console.log(obj3);

const swimObj = new Swimmer('Mike', 'swimStyle');
console.log(swimObj);

swimObj.run();
swimObj.swim();
