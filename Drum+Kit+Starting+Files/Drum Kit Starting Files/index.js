function addClickedDrums()
{
    for(var i=0 ; i<document.querySelectorAll("button").length ; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            switch (this.innerHTML) {
                case "w":
                    var crash = new Audio("./sounds/crash.mp3");
                    crash.play();

                case "a":
                    var kickBass = new Audio("./sounds/kick-bass.mp3");
                    kickBass.play();   
                    break;

                case "s":
                    var snare = new Audio("./sounds/snare.mp3");
                    snare.play(); 
                    break;

                case "d":
                    var tomOne = new Audio("./sounds/tom-1.mp3");
                    tomOne.play(); 
                    break;

                case "j":
                    var tomTwo = new Audio("./sounds/tom-2.mp3");
                    tomTwo.play(); 
                    break;

                case "k":
                    var tomThree = new Audio("./sounds/tom-3.mp3");
                    tomThree.play(); 
                    break;
                
                case "l":
                    var tomFour = new Audio("./sounds/tom-4.mp3");
                    tomFour.play(); 
                    break;

                default: console.log(this.innerHTML);
                    break;
            }
        });
    }
}
addClickedDrums();
function keyBoardDrums()
{
    document.addEventListener("keypress", function(event){
        if(event.key === "w")
        {
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        }
        if(event.key === "a")
        {
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
        }
        if(event.key === "s")
        {
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        }
        if(event.key === "d")
        {
            var tomOne = new Audio("./sounds/tom-1.mp3");
            tomOne.play();
        }
        if(event.key === "j")
        {
            var tomThree = new Audio("./sounds/tom-3.mp3");
            tomTwo.play();
        }
        if(event.key === "k")
        {
            var tomThree = new Audio("./sounds/tom-3.mp3");
            tomThree.play();
        }
        if(event.key === "l")
        {
            var tomFour = new Audio("./sounds/tom-4.mp3");
            tomFour.play();
        }
    })
}
keyBoardDrums();