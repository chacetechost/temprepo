const path = require('path');

console.log(path.sep) // This sows the seperator of a path folder.

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath); // These joins paths together as a callback.

const base = path.basename(filePath);
console.log(base);

// Path resolve, to return an absolute path.

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);