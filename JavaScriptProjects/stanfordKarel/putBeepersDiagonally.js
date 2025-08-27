function main(){
   //your code here
   
   putBeepersDiagonally();
   
}
function MoveDiagonallyPutBeeper(){
   move();
   turnLeft();
   move();
   turnRight();
   putBeeper();
}
function putBeepersDiagonally(){
   putBeeper();
   MoveDiagonallyPutBeeper();
   MoveDiagonallyPutBeeper();
   MoveDiagonallyPutBeeper();
   MoveDiagonallyPutBeeper();
}