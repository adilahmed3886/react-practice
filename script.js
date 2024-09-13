let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let pass = "";

for (let index = 0; index < 8; index++) {
    pass += str.charAt(Math.floor(Math.random() * str.length +1))
}
console.log(pass)