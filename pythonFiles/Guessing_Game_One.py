'''Generate a random number between 1 and 9 (including 1 and 9).
Ask the user to guess the number, then tell them whether they 
guessed too low, too high, or exactly right.'''

def guess_num():
    import random
    random_num = random.randint(1, 9)
    gotnum = False
    countguess = 0
    while(gotnum == False):
        user_guess = input("Guess what number I'm thinking about between 1 and 9: (if you want to exit the game type exit.)").lower()
        if user_guess == "exit":
            print("game over")
            break
        else: user_guess = int(user_guess)
        if user_guess == random_num:
            countguess += 1
            gotnum == True
            print("you got the right one!")
            print("game ended")
            break
        elif user_guess > random_num:
            countguess += 1
            print("try smaller")
        elif user_guess < random_num:
            countguess += 1
            print("try bigger")
        else: print("there was an error in input")
    print(f"you guessed {countguess} times")
guess_num()