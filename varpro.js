// console.log(foo);
// bar();
// var foo = "foo";
// function bar() {
//   console.log("bar");
// }

// var foo = undefined;
// function bar() {
//   console.log("bar");
// }

// console.log(foo);
// bar();
// foo = "foo";

// var a = 2;
// function add(b, c) {
//   return b + c;
// }
// function addAll(b, c) {
//   var d = 10;
//   var result = add(b, c);
//   return a + result + d;
// }
// addAll(3, 6);

function factorial1(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

let time1 = new Date().getTime()
var a = factorial1(1000)
let time2 = new Date().getTime()
console.log(time2-time1)

function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}
