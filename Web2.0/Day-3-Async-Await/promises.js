// return promise

function promisifiedSetTimeout(ms){
    return new Promise((res,rej) => {
        setTimeout(()=> {
            res('hiii');
        },ms)
        // rej(new Error('nnoo'))a
    })
}

const p = promisifiedSetTimeout(3000)
p.then(res => {
    console.log(res)
})
.catch(function (error){
    console.log(error.message);
})