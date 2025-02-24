from blackJGame import blackJack
from dealer import dealerLogic
from flask import Flask, request, jsonify
import random

app = Flask(__name__)
game = blackJack()

suits = ["♠", "♥", "♦", "♣"]
values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]


if __name__ == "__main__":
        deck = game.create_deck()
        deck = game.shuffle_deck(deck)
        play = False
        #print(deck)
        print('Would you like to play a game of BlackJack?')
        if input() == 'yes':
            print('Lets play')
            play = True
        else:
            play = False
        while play == True:
            loss = False
            player_hand = [game.deal_card(deck), game.deal_card(deck)]
            print('Player hand1', player_hand)
            dealer = dealerLogic(deck)
            #print('dealer', dealer)
            #dealer_hand = [game.deal_card(deck), game.deal_card(deck)]   
            #print('Dealer hand', dealer.dealer_hand)
            print('Player total', game.calculate_hand(player_hand))
            print('Dealer total', game.calculate_hand(dealer.dealer_hand))
            game.isWinner(player_hand, dealer.dealer_hand)
            while not loss:
                choice = input('Would you like to hit or stand OR double down? \n')
                if choice == 'hit':
                    player_hand = game.hit(player_hand, deck)
                    print('Player hand2', player_hand, 'Player total', game.calculate_hand(player_hand))
                    if game.isBust(player_hand):
                        print('Player Busted Game over')
                        loss = True
                if choice == 'double down':
                    player_hand = game.double_down(player_hand, deck)
                if choice == 'stand':
                    player_hand = game.stand(player_hand)
                    #print('tester', dealer.dealer_hand)
                    dealer.dealerLogic(dealer.dealer_hand, deck)
                    print('Dealer hand', dealer.dealer_hand)
                    print(game.isWinner(player_hand, dealer.dealer_hand), 'is the Winner!!\n')
                    #print(game.isWinner(player_hand, dealer.dealer_hand))
                    loss = True
                    break
                if loss:
                    #print('loss', loss)
                    action = input('Would you like to play again? \n')
                    if action == "yes":
                        print('Lets play')
                        play = True
                    else:
                        print('Goodbye')
                        play = False
                    break
        print('Game Over')
        # print('Player hand', player_hand)