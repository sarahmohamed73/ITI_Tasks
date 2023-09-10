# Simulate a sports tournament

import csv
import sys
import random
from datetime import datetime, timedelta

# Number of simluations to run
N = 1000


def main():
    startTime = datetime.now()
    # Ensure correct usage
    print(sys.argv)
    if len(sys.argv) != 2:
        sys.exit("Usage: python tournament.py FILENAME")

    teams = []
    # TODO: Read teams into memory from file
    try:
        fileName=sys.argv[1]
        with open(fileName, "r") as my_csv:
            reader=csv.DictReader(my_csv)
            for row in reader:
                # print(row) #{'team': 'Uruguay', 'rating': '976'} Error Rating String
                team = row
                team['rating'] = int(team["rating"])
                # print(team) #{'team': 'Uruguay', 'rating': 976}
                teams.append(team)
    except FileNotFoundError:
        print("File Not Found!, Try Again")
        sys.exit()
    # print("teams",teams)

    counts = {}
    # TODO: Simulate N tournaments and keep track of win counts
    for simulation in range(N):
        winner = simulate_tournament(teams)
        if winner in counts:
            counts[winner] += 1
        else:
            counts[winner] = 1

    # winner = simulate_round(teams)
    # winner = simulate_tournament(teams)
    # print("winner",winner)

    # Print each team's chances of winning, according to simulation
    for team in sorted(counts, key=lambda team: counts[team], reverse=True):
        print(f"{team}: {counts[team] * 100 / N:.1f}% chance of winning")
    
    endTime = datetime.now()
    elapsedTime = endTime - startTime
    elapsedTime = endTime - startTime
    minutes = elapsedTime.seconds // 60
    seconds = elapsedTime.seconds % 60
    milliseconds = elapsedTime.microseconds // 1000
    print(f"{minutes}m{seconds:01d}.{milliseconds:03d}s")


def simulate_game(team1, team2):
    """Simulate a game. Return True if team1 wins, False otherwise."""
    rating1 = team1["rating"]
    rating2 = team2["rating"]
    probability = 1 / (1 + 10 ** ((rating2 - rating1) / 600))
    return random.random() < probability


def simulate_round(teams):
    """Simulate a round. Return a list of winning teams."""
    winners = []

    # Simulate games for all pairs of teams
    for i in range(0, len(teams), 2):
        if simulate_game(teams[i], teams[i + 1]):
            winners.append(teams[i])
        else:
            winners.append(teams[i + 1])

    return winners




def simulate_tournament(teams):
    """Simulate a tournament. Return name of winning team."""
    # TODO
    if len(teams) == 1:
        return teams[0]["team"]
    else:
        teams = simulate_round(teams)
        return simulate_tournament(teams)




if __name__ == "__main__":
    main()
