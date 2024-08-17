// 1. we will convert a string into bytes array Uint8Array
// 2. then we will convert that bytes array to hex
// 3. then again convert that hex into the byte array
// 4. then we again convert the byte array into original string

// step1: string into bytes
function strToBytes(str) {
  let bytearray = new Uint8Array(str.length);

  for (let i = 0; i < str.length; i++) {
    bytearray[i] = str.charCodeAt(i);
  }
  return bytearray;
}

// step2. byte array to hex
function bytesArrToHex(inputarr) {
  let hex = "";
  for (let i = 0; i < inputarr.length; i++) {
    hex += inputarr[i].toString(16).padStart(2, "0");
  }
  return hex;
}

// step3. hex to bytes array
function hexToBytesArr(hex) {
  let bytesarr = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length / 2; i++) {
    bytesarr[i] = parseInt(hex.substr(i * 2, 2), 16); // substr(start, end)
  }
  return bytesarr;
}

// step4. bytes array to str
function bytesArrToStr(inputarr) {
  let original_str = "";
  for (let i = 0; i < inputarr.length; i++) {
    original_str += String.fromCharCode(inputarr[i]); // char code (ascii) to string
  }
  return original_str;
}

let str = "dhruval gupta";
let result = strToBytes(str);
console.log(result);
let result2 = bytesArrToHex(result);
console.log(result2);
let result3 = hexToBytesArr(result2);
console.log(result3);
let result4 = bytesArrToStr(result3);
console.log(result4);
