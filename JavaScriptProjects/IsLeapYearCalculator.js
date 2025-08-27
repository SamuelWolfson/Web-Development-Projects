function isLeapYear (year) {
    var isInputAStrictNumber = (typeof year === "number" && Number.isFinite(year));
    var isLeap = false;
    if (isInputAStrictNumber)
    {
        if (year %4 === 0 )
        {
            isLeap = true;
            if (year %100 === 0 )
            {
                isLeap = false;
                if (year %400 === 0 )
                {
                    isLeap = true;
                }
            }
        }
    return "it is " + isLeap +" that the year you inputted is a leap."
    }
    else
    {
        alert("input error, try angain and adjust input.");
    }
}
isLeapYear ("12");