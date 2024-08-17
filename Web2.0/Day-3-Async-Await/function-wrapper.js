function promisified(resolve){
    return setTimeout(resolve, 3000);
}

function main(){
    console.log("Start");
}

const p = promisified(main)