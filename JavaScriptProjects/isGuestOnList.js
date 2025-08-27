function isOnGuestList(name) 
{
 var guestList = ["Sam" , "Amelya" , "Elena" , "Alexander" , "Grisha", "Veronica"];
 var firstCharName = name[0];  
 var upperFirstCharName = firstCharName.toUpperCase();
 name = upperFirstCharName + name.slice(1,name.length);
 if (guestList.includes(name))
 {
  return true;
 }
 else 
 {
  return false;
 }
}
isOnGuestList ("veronica");