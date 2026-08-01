function fibonachi(n)
{
    var arr = [0,1];
    for(var i = 1 ; i <= n-2 ; i++)
    {
        arr.push(arr[i]+arr[i-1]);
    }
    return arr
}
fibonachi(6);