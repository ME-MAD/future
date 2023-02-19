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