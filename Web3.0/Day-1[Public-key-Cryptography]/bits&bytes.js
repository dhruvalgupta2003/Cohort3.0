// bytes to ascii
function bytesToAscii(bytearray) {
  return bytearray.map((byte) => String.fromCharCode(byte)).join(""); // ascii to binary String.fromCharCode
}

const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello"

// ascii to bytes
function asciiToBytes(asciiString) {
  return asciiString.split("").map((c) => c.charCodeAt(0)); // byte to ascii conversion charCodeAt
}

const asciiStringNew = "Hello";
const bytesFromAscii = asciiToBytes(asciiStringNew);
console.log(bytesFromAscii); // Output: [72, 101, 108, 108, 111]
