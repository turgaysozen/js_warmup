// closure
const x = 100
logx = () => {
    console.log(x)
}

logx()


makeAdder = (x) => {
    return (y) => {
        return x + y
    }
}

const add5 = makeAdder(5)
console.log(add5(10))


// hoisting
foo = () => {
    console.log('foo')
}

foo()

bar()
function bar() {
    console.log('bar')
}

// difference between the callback and promises

//callback
getNumber = (cb) => {
    console.log('Hi')
    setTimeout(() => {
        cb(10)
    }, 2000)
    console.log('Hii')
}

// getNumber(
//     callback = (n) => {
//         console.log(n)
//     }
// )

// promie

getNumberPromise = () => {
    return new Promise((resolve, reject) => {
        getNumber(resolve)
    })
}

const promise = getNumberPromise()
promise.then(n => {
    console.log(n)
})
