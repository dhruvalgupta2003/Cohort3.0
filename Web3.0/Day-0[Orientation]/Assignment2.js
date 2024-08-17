const crypto = require("crypto");

// Function to check hash with prefix
function findHashWithPrefix(inputstrPrefix, hashPrefix) {
  let input = 0;

  while (true) {
    let inputStr = inputstrPrefix + input.toString();
    const hash = crypto.createHash("sha256").update(inputStr).digest("hex");

    if (hash.startsWith(hashPrefix)) {
      return {prefix: inputstrPrefix,  input: input, hash: hash };
    }

    input++;
  }
}

// inputstr should starts with some value
const inputstrPrefix = "100xdevs";
const hashPrefix = "00000";
const result = findHashWithPrefix(inputstrPrefix, hashPrefix);
console.log(`Prefix: ${result.prefix}`);
console.log(`Input: ${result.input}`);
console.log(`Output: ${result.hash}`);
