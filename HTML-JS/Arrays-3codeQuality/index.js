// bad
const withdraw = (clients, balances, names, amount) => {
  let result = 0;
  clients.forEach(function (client, index) {
    if (client.includes(names) && balances[index] >= amount) {
      result = balances[index] - amount;
    } else if (client.includes(names) && balances[index] < amount) {
      result = -1;
    }
  });
  return result;
};

//good

const withdraw = (clients, balances, clientName, amount) => {
  const clientIndex = clients.indexOf(clientName);
  if (balances[clientIndex] < amount) {
    return -1;
  }
  //...
  //...
  //...
  //...
  //...
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] < amount ? -1 : (balances[clients.indexOf(client)] -= amount);

//bad

// function withdraw(clients, balances, client, amount) {
//   let i = 0;
//   for (; i < clients.length; ++i) {
//     if (clients[i] === client) {
//       break;
//     }
//   }

//   balances[i] -= amount;
//   console.log(balances);
//   return balances[i] > 0 ? balances[i] : -1;
// }

// good

const withdraw = (clients, balances, clientName, amount) => {
  const clientIndex = clients.indexOf(clientName);
  if (balances[clientIndex] < amount) {
    return -1;
  }
  //...
  //...
  //...
  //...
  //...
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// bad

const withdraw = (clients, balances, client, amount) => {
  let clientNum = clients.indexOf(client);
  const isEnough = (num) => {
    if (num > amount) {
      return num - amount;
    }
    return -1;
  };
  const newBalances = balances.map(isEnough);
  return newBalances[clientNum];
};

//good

const withdraw = (clients, balances, client, amount) => {
  let clientNum = clients.indexOf(client);
  const newBalances = balances.map((num) => {
    if (num >= amount) {
      return num - amount;
    }
    return -1;
  });

  return newBalances[clientNum];
};

//test data

const clients = ['Denis', 'Andrew', 'Jack'];
const balances = [100, 80, 1200];
const client = 'Jack';
const amount = 500;
console.log(withdraw(clients, balances, client, amount));
console.log(balances);

// bad
const withdraw = (clients, balances, client, amount) => {
  //put your code here
  let ind = clients.indexOf(client);
  let bal = balances[ind];
  return bal < amount ? -1 : (balances[ind] -= amount);
};

//good

const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  return balance < amount ? -1 : (balances[index] -= amount);
};

//bad

function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    balances[indexOfPerson] -= amount;
    return amount;
  }
  if (balances[indexOfPerson] < amount) {
    return -1;
  }
}

//good

function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }
  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

//bad
function withdraw(clients, balances, client, amount) {
  let output = 0;
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    output = balances[indexOfPerson] - amount;
    return output;
  }
  output = -1;

  return output;
}

//good
function withdraw(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }
  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}
//......
const users = [10, 24, 15, 30, 46];
const res = users.filter((age) => age > 18);
console.log(res.length);



console.log(x);
let x = 5;
console.log(x);


let a = {
const = 'hell'
};


console.log(a);

// let b = a;
// b.Stepan = 45;
// b["Vasiliy"] = "78";
// console.log(a)
// console.log(b);
// a.Andrew = 17;
// console.log(a);
// console.log(b);
// // console.log(b);
// // b["Vasiliy"] = "78";
// // console.log(b);
// console.log(a);
















