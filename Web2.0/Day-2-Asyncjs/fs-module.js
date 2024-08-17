const fs = require("fs"); // file system library (imbuilt node js library: we just have to import it)

const data = fs.readFileSync("a.txt", "utf-8");
console.log(data);

const bufferData = fs.readFileSync("a.txt");
console.log(bufferData);

/* 
The buffer you provided (`<Buffer 68 69 20 69 20 61 6d 20 61 20 74 65 78 74 20 66 69 6c 65 2e>`) is a hexadecimal representation of a binary data buffer. When you read a file using `fs.readFileSync` in Node.js without specifying an encoding, the data is returned as a `Buffer` object, which represents binary data.

### Decoding the Buffer

Each pair of hexadecimal digits (`68`, `69`, `20`, etc.) represents a single byte. These bytes can be translated into characters using the `UTF-8` encoding, which is the default encoding used by Node.js for text data.

Here’s how you can decode the buffer to its string representation:

```javascript
const fs = require('fs');

// Read the file as a buffer
const bufferData = fs.readFileSync('a.txt');

// Convert the buffer to a string using UTF-8 encoding
const decodedData = bufferData.toString('utf8');

console.log(decodedData);
```

### Decoded Output

The buffer `<Buffer 68 69 20 69 20 61 6d 20 61 20 74 65 78 74 20 66 69 6c 65 2e>` decodes to the following string:

```
hi i am a text file.
```

### Explanation
- `68 69` -> `hi`
- `20` -> space (` `)
- `61` -> `a`
- `6d` -> `m`
- `74` -> `t`
- `65` -> `e`
- `78` -> `x`
- `66` -> `f`
- `69` -> `i`
- `6c` -> `l`
- `2e` -> `.`

So the buffer represents the string `"hi i am a text file."`.
*/