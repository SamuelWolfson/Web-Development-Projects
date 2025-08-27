"""Ask the user for a number and determine whether the number is prime or not. 
(For those who have forgotten, a prime number is a number that has no divisors.)."""
def devisors(n):
   return [i for i in range(1,n+1) if n%i==0]
def IsPrimary(num):
   if devisors(num)[1] == num:
      return True
   return False
print(IsPrimary(20))