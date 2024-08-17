// promisified version of setTimeout
function promisifiedSettimeout(a) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (a > 5) {
        res("hii");
      } else {
        rej(new Error("byee"));
      }
    }, 2000);
  });
}

promisifiedSettimeout(2) // pass a value here
  .then((result) => {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error.message);
  });
