// logs hi after 1 s
// logs hello 3s after hi is logged
// logs hello there 5s after hello is logged

function promisifiedSetTimeout(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
function printHi() {
  console.log("hi");
  return promisifiedSetTimeout(3000)
}

function printHello(){
    console.log("hello");
    return promisifiedSetTimeout(5000)
}
function printHelloThere(){
    console.log("hello there");
}

// promise chaining
promisifiedSetTimeout(1000).then(printHi).then(printHello).then(printHelloThere)


// use promise.all
Promise.all([
    promisifiedSetTimeout(1000).then(printHi),
    promisifiedSetTimeout(3000).then(printHello),
    promisifiedSetTimeout(5000).then(printHelloThere)
])
