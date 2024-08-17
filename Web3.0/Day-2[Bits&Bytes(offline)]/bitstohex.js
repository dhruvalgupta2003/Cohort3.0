function arrayToHex(bytearr) {
  let hexStr = "";
  for (let i = 0; i < bytearr.length; i++) {
    hexStr += bytearr[i].toString(16).padStart(2, "0");
  }
  return hexStr;
}

const bytearr = new Uint8Array([72, 101, 108, 111]);
const hex = arrayToHex(bytearr);
console.log(hex);
