// let count = 0;
// console.log(parseInt("count" + 1));

// console.log(Math.pow(4, 0.5) + "spiderman" + "987" + Math.sqrt(9));

function generatePin() {
    return Math.floor(Math.random() * 90000) + 10000;
}

console.log(generatePin())

// const product = 5;
// const price = "7";
// const subTotal = product * price;
// const tax = subTotal / 10;
// const total = subTotal + tax;
// console.log(total)