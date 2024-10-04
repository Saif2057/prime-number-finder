

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimeNumbers(arr) {
    const primeNumbers = [];
    arr.forEach(num => {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    });
    return primeNumbers;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimeNumbers(numbers);

console.log("Prime Numbers:", primeNumbers);

function printResults(primeNumbers) {
    console.log("Prime Numbers:", primeNumbers);
}


printResults(primeNumbers);
