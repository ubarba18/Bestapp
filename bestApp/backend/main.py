from black import blackJack
import random

game = blackJack()

suits = ["♠", "♥", "♦", "♣"]
values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]


if __name__ == "__main__":
        deck = game.create_deck()
        deck = game.shuffle_deck(deck)
        play = False
        loss = False
        #print(deck)
        print('Would you like to play a game of BlackJack?')
        if input() == 'yes':
            print('Lets play')
            play = True
        else:
            play = False
        while play == True:
            action = input('Would you like to play another round of BlackJack?')
            if action == 'no':
                break
            player_hand = [game.deal_card(deck), game.deal_card(deck)]
            print('Player hand', player_hand)
            dealer_hand = [game.deal_card(deck), game.deal_card(deck)]   
            print('Dealer hand', dealer_hand)
            print('Player total', game.calculate_hand(player_hand))
            print('Dealer total', game.calculate_hand(dealer_hand))
            game.isWinner(player_hand, dealer_hand)
            while not loss:
                print('Would you like to hit or stand OR double down?')
                if input() == 'hit':
                    player_hand = game.hit(player_hand, deck)
                    print('Player hand', player_hand)
                    if game.isBust(player_hand):
                        print('Player Busted Game over')
                        loss = True
                elif input() == 'double down':
                    player_hand = game.double_down(player_hand, deck)
                elif input() == 'stand':
                    player_hand = game.stand(player_hand)
                if loss:
                    print('loss', loss)
                    break
        print('Game Over')
        # print('Player hand', player_hand)