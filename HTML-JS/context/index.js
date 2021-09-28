'use strict';
const timer = {
  secondPassed: 0,
  minsPassed: 0,
  timerId: 0,

  startTimer() {
    console.log(this);
    this.timerId = setInterval(() => {
      console.log(this);
      this.secondPassed += 1;
      if (this.secondPassed === 5) {
        this.minsPassed += 1;
        this.secondPassed = 0;
      }
    }, 1000);

    // lose context #2 ( inside callback )
    // [1, 2, 3, 4, 5].filter(function () {
    //   console.log('filter this ' + this);
    // });

    // function filter (callback) {
    // ....
    // ....
    // callback();
    // ....
    // ....
    //}
    // lose context #2 ( inside callback )
    // const callbackFunc = function() {
    //   console.log(this)
    //   this.secondPassed += 1;

    // }
    // // fiz content with bind
    // const bindedCallbackFunc = callbackFunc.bind(this);
    // setInterval(bindedCallbackFunc, 1000);

    // lose context #2 ( inside callback )
    // setInterval(function () {
    //   console.log(this);
    //   this.secondPassed += 1;
    // }.bind(this), 1000);
    // function setInterval(callback) {
    // ....
    // ....
    // window.callback()
    //}
  },
  stopTimer() {
    //
    clearInterval(this.timerId);
  },
  getTimer() {
    //
  },
  resetTimer() {
    //
  },
};

// context
// 1. know when context is lost (2-3 cases)
// 2. fix context

// test data
timer.startTimer();

// lose context #1
// const startTimerFunc = timer.startTimer;
// startTimerFunc();

// set Interval example
// setInterval(() => {
//   console.log('Monday');
// }, 2000);

// lose context case #2
// [1, 2, 3, 4, 5].filter(function () {
//   console.log('filter this ' + this);
// });
