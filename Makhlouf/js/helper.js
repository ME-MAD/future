const getSumOfTwoNumbers = (num1, num2) => num1 + num2

const getSquare = num => num * num

const getCube = num => num * num * num

const pow = (n , po) => {
    let result = 1;
    
    for(let i = 1; i <= abs(po); i++)
    {
        result *= n;
    }

    return (po < 0) ? (1 / result) : result;
}

const abs = n => (n >= 0) ? n : n * -1

function isPrime(num) {
    if (num == 2 || num == 3)
      return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0)
      return false;
    for (let i = 5; i * i <= num; i += 6)
      if (num % i == 0 || num % (i + 2) == 0)
        return false;
    return true;
}