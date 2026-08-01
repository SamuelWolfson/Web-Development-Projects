var output = [];
var pushNumber =  0;
function fizzBuzz() 
{
    pushNumber = outPut.length+1;
    if(pushNumber%15 === 0)
    {
        outPut.push("FizzBuzz");
    }
    else
    {
        if(pushNumber%3 === 0)
        {
            outPut.push("Fizz");
        }
        else
        {
            if(pushNumber%5 === 0)
            {
                outPut.push("Buzz");
            }
            else
            {
                outPut.push(pushNumber);
            }
        }
    }
    console.log(outPut);
}
fizzBuzz();