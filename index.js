
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

// find the next prime number 
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


function csvFile(csvString){
    let rows = csvString.split(`\n`)

    for (let i = 0; i < rows.length; i++){
        let cells = rows[i].split(`,`);

        if(cells.length === 4){
            let output = ``;
            for (let index in cells ){
                output+= cells [index]+``;

            }
            console.log(output.trim())
        }else {
            console.log(`Error: There are less than 4 cells in the row:`, rows[i])
        }
    }
}

let csvData  = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`; csvFile(csvData);

