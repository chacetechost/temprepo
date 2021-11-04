/* NPM stands for Node package manager,
it is a Global Command,
To check the version, just run (npm --Version)
it has local dependencies, whichmeans it can only be used in a particular project
it is used as follows (npm i <PackageName>)
it also has global dependencies, which means, this can be used in any kind of projects.
it is used in this case as follows. (npm  install -g <packageName>)

to use this in a sudo  format, we say (npm install -g <packageName> (mac)) */

// package.json. This stores important information about our project. 
// Manual approach (Create package.json in the root , create properties.etc)
//npm init (this will prompt you some questions to do things step by step. You can keep pressing enter to skip)
// Npm init -y (everything will be set up default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
