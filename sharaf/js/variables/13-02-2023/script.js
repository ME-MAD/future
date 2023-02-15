function FizzBuzz() 
{
    var num = Number(prompt("Enter The Number"))
    if (!Number.isNaN(num))
        {
            for (let i = 0; i <= num; i++) {

                if ( i % 3 == 0 && i % 5 == 0 )
                {
                    document.write("<h2>Fizz Buzz</h2>")
                }
                else if (i % 3 == 0)
                {
                    document.write("<h2>Fizz</h2>")
                }
                else if (i % 5 == 0)
                {
                    document.write("<h2>Buzz</h2>")
                }
                else
                {
                    document.write("<h2>"+i+"</h2>")
                }
            }
        }
        else
        {
            document.write("<h2> The Number You Entered Is Incorrect </h2>")
        }
}




function PrintOutTriangle_2()
{
    var num = Number(prompt("Enter The Number"))
    if (!Number.isNaN(num)){
         
        for (let i = 1; i <= num; i++) 
        {
            for (let j = 1; j <= i; j++)
            {
               document.write("<span style='color:red'> " + j + " </span>")
            }
            document.write("<br>")
        }
    }
    else
    {
        document.write("<h2> The Number You Entered Is Incorrect </h2>")
    }
}







function Training() 
{
    var num = Number(prompt("Enter The Number"))
    
    if(!Number.isNaN(num)) 
    {
        for (let i = 1; i <= num; i++)
        {
            for (let j = 1; j <= i; j++) 
            {
            document.write(i)
            }
         document.write("<br>")
        }    
    }
    else
    {
        Document.write("The Number Is Not Right ")
    }
}