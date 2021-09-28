// input: obj
// output: undefined
function saveUser(userData) {
  // input: url(string), obj (headers, ...)
  // output: obj (promise)
  const res = fetch('https://61486eaf035b3600175b9e2d.mockapi.io/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    // input: callback
    // output: promise
    .then((responce) => responce.json())
    .then((body) => {
      console.log(body);
    });

  // console.log(responce.status);
  // console.log(body);

  console.log(res);
}

// test data
const user = {
  email: 'test@gmail.com',
  firstName: 'Iurii',
  lastName: 'Babitskyi',
  city: 'Lviv',
  age: 31,
};
console.log(JSON.stringify(user));
saveUser(user);
