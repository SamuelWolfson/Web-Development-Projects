import random
#Definig Rock Papper Scissors game
def Rock_paper_scissors():
    score_player = 0
    score_computer = 0

    print("We play Rock Paper Scissors with a Computer, you have to score 3 points to win")

    while(score_player != 3 and score_computer !=3):
        player_playes = input("What do you play: (Rock/Papper/Scissor)")
        computer_playes = random.choice(["Rock", "Papper", "Scissor"])
        if player_playes == computer_playes:
            print("Even!, -play again if you want to win-")
        elif player_playes == "Rock" and computer_playes == "Scissor":
            score_player += 1
            print(f"The Player won!, and scored a total of {score_player} point")
        elif player_playes == "Scissor" and computer_playes == "Rock":
            score_computer += 1
            print(f"The Computer won!, and scored a total of {score_computer} point")
        elif player_playes == "Papper" and computer_playes == "Rock":
            score_player += 1
            print(f"The Player won!, and scored a total of {score_player} point")
        elif player_playes == "Rock" and computer_playes == "Papper":
            score_computer += 1
            print(f"The Computer won!, and scored a total of {score_computer} point")
        elif player_playes == "Scissor" and computer_playes == "Papper":
            score_player += 1
            print(f"Player won!, and scored a total of {score_player} point")
        elif player_playes == "Papper" and computer_playes == "Scissor":
            score_computer += 1
            print(f"The Computer won!, and scored a total of {score_computer} point")
        else:
            print("There was an ERROR in input")
    print("game ended")
    if score_computer == 3:
        print("A computer beat you, don't loose hope ;)")
    elif score_player ==3:
        print("I guess humans have more luck than computers")
Rock_paper_scissors()

    
    