function getSumOfTwoNumbers(num1, num2)
{
    let result = num1 + num2;
    return result;
}

function pow(n,po) 
{
    let result = 1;
    
    for(let i = 1; i <= abs(po); i++)
    {
        result *= n;
    }

    if(po < 0)
    {
        return (1 / result);
    }

    return result;
}

function abs(n) 
{
    if(n >= 0)
    {
        return n;
    }
    else
    {
        return (n * -1)
    }
}
