/* eslint-disable */
/* 
// global
{
  'enviromentRecord': {
    'message': 'Test,
    'weight': '55',
    'createMessenger': 'func'
    ...
  }
  'otherLexicalInviroment': null
}
// createMessenger
{
  'enviromentRecord': {
    'message': 'Just learn it'
    'sender': 'Gromcode',
    'sendMessage': 'func'
    ...
  }
  'otherLexicalInviroment': global
}

// run();
{
  'enviromentRecord': {}
  'otherLexicalInviroment': global
}

// messanger.sendMessage
{
    'enviromentRecord': {}
  'otherLexicalInviroment': createMessenger()
}


*/

const message = 'Test message';
const weight = 55;

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

if (true) {
  const currentDay = 'Monday';
  console.log(message);
}
// console.log(currentDay);

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
// console.log(sender);
const messanger = createMessenger();
messanger.sendMessage('TestName');
run();
