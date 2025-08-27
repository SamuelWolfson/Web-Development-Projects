function main()
{
    
    var rolledDice = roll2Dice();
    if(rolledDice[0]>rolledDice[1])
    {
        document.querySelector("h1").innerHTML =  "🚩Player1 Wins!";
    }else{
        if(rolledDice[0] === rolledDice[1])
        {
             document.querySelector("h1").innerHTML ="Draw!"
        }
        else{
            document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
        }
    }
    document.querySelector(".img1").setAttribute("src", "./images/dice"+(rolledDice[0])+".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice"+(rolledDice[1])+".png");
}
function roll2Dice()
{
    return [Math.round((Math.random()*5+1)), Math.round((Math.random()*5+1))]
}
if(performance.getEntriesByType("navigation")[0].type === "reload")
{
    main();
}
