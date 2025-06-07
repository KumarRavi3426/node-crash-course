// const xyz = require('./people');
// console.log(xyz);

const { mkdir } = require('fs');
const { people, ages } = require('./people'); // getting the data after destructuring and in this case, name of the exported and received value has to be same
console.log(people, ages);

const os = require('os')
// console.log(os.platform, os.homedir)