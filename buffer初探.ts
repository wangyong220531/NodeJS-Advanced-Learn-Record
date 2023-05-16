const buf = Buffer.alloc(6)

console.log(buf)

const buf1 = Buffer.alloc(5, 1)

console.log(buf1)

const buf2 = Buffer.allocUnsafe(8)

console.log(buf2)

const buf3 = Buffer.from([1, 2, 3])

console.log(buf3)

const buf4 = Buffer.from("testInfo")

console.log(buf4)

const buf5 = Buffer.from("TypeScript", "Java")
