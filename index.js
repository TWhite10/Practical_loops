
// //Loop through all number from 1 to 100
// n = 0
// while (n <= 99){
//     n++
//     console.log(n)
// }

// //Fizz Buzz 
// let n = 1
// while (n <= 100){
//     if (n % 3 === 0 && n % 5 === 0) {
//         console.log(n + ` Fizz Buzz`)
//     }
//     else if (n % 3 === 0){
//        console.log ( n + ` Fizz`) 
//     }
//     else if (n % 5 === 0){
//         console.log(n + ` Buzz`)
//     }
//     n++;
// }

//find the next prime number 
let n = 15
function nextPrime(n) {
    function primeNumber(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    let nextNum = n + 1;
    while (!primeNumber(nextNum)) {
        nextNum++;
    }
    return nextNum;
}
console.log(`The next prime number after ${n} is ${nextPrime(n)}`);