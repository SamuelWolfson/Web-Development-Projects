var yourDogAge = 0;
var humanAge = 0;
dogYearsToHumanYears();
function dogYearsToHumanYears() 
{
    yourDogsAge = prompt("Enter your dogs age: (In whole years/ An integer)");
    if (isNaN(yourDogsAge) || yourDogsAge.length == 0)
    {
        alert("Input is not valid, -- try again -- ");
        dogYearsToHumanYears();
    }
    else
    {
        humanAge = ((yourDogsAge - 2) * 4) + 21;
        alert("Your dog is " + humanAge + " years old in human years!");
    }
 }
