let p1 = Promise.resolve('foo')
let p2 = p1.then()
setTimeout(console.log, 0, p2) // Promise <resolved>: foo
let p3 = p1.then(() => undefined)
//返回Undefined
let p4 = p1.then(() => { })
let p5 = p1.then(() => Promise.resolve())
setTimeout(console.log, 0, p3) // Promise <resolved>: undefined
setTimeout(console.log, 0, p4) // Promise <resolved>: undefined
setTimeout(console.log, 0, p5) // Promise <resolved>: undefined
let p6 = p1.then(() => 'bar')
setTimeout(console.log, 0, p6) // Promise <resolved>: bar
let p7 = p1.then(() => Promise.resolve('bar'))
setTimeout(console.log, 0, p7) // Promise <resolved>: bar
let p8 = p1.then(() => new Promise(() => { }))
setTimeout(console.log, 0, p8) // Promise <pending>

// let p9 = p1.then(() => Promise.reject())
// Uncaught (in promise): undefined
// setTimeout(console.log, 0, p9) // Promise <rejected>: undefined

let p10 = p1.then(() => { throw 'baz' })
// Uncaught (in promise) baz
setTimeout(console.log, 0, p10) // Promise <rejected> baz