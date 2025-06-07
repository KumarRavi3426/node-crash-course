

// console.log(global)

global.setTimeout(() => {        //we can use setTimeout instead of global.setTimeout
    clearInterval(int)
}, 4051);

int = global.setInterval(() => {
    console.log(1)
}, 1000)
console.log(__dirname)
console.log(__filename)

// console.log(document.querySelector)      this won't work because document is a property of window object, not global object