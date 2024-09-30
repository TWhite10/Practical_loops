
//Loop through all number from 1 to 100
n = 0
while (n <= 99){
    n++
    console.log(n)
}

//Fizz Buzz 
let n = 1
while (n <= 100){
    if (n % 3 === 0 && n % 5 === 0) {
        console.log(n + ` Fizz Buzz`)
    }
    else if (n % 3 === 0){
       console.log ( n + ` Fizz`) 
    }
    else if (n % 5 === 0){
        console.log(n + ` Buzz`)
    }
    n++;
}
  