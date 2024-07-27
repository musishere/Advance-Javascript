// callBack functions does not know that if the code is complete or not so we have to tell that code is completed and now you can run the function this task is done by callback

setTimeout(function () {
  console.log('Hello after 2 seconds');
}, 2000);
