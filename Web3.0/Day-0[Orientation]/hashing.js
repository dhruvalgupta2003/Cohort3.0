const crypto = require("crypto");

const input = "Dhruval Gupta";
const hash = crypto.createHash("sha256").update(input).digest("hex");
console.log(hash);

