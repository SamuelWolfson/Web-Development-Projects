/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main()
{
   //your code here
   chessBoardOfBeepers();
}

function chessBoardOfBeepers()
{
   while(frontIsClear() || leftIsClear())
   {
      putBeeper();
      while(frontIsClear())
      {
      putBeeperMoveTwoForwardPutBeeper();
      }
      TurnLeftMoveTurnLeft();
      while(frontIsClear())
      {
      movePutBeeperMove();
      }
      TurnRightMoveTurnRight();
   }
}
function putBeeperMoveTwoForwardPutBeeper(){
   move();
   move();
   putBeeper();
}
function movePutBeeperMove(){
   move();
   putBeeper();
   move();
}
function TurnLeftMoveTurnLeft(){
   turnLeft();
   move();
   turnLeft();
}
function TurnRightMoveTurnRight(){
   turnRight();
   move();
   turnRight();
}