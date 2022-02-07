let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Hello World");
    }, 5000);
  });
  console.log(promise);
  promise
    .then(function () {
      console.log("Hello World");
    })
    .catch(function () {
      console.log("fail", promise);
    });