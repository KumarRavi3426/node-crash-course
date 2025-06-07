const people = ['yoshi', 'ravi', 'mario'];
const ages = [24, 53, 11,]

console.log(people)      // if this is not commented out, then this line will run whenever it is required in any other file

// module.exports = "hello"         // by default if we export anything from a module, it is an object      In this case it will be a string
// module.exports = { people: ages, ages: people };
module.exports = { people, ages };