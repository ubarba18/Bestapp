import random
from blackJGame import blackJack
class dealerLogic:

    game = blackJack()

    def __init__(self, deck):
        self.dealer_hand =  [self.game.deal_card(deck), self.game.deal_card(deck)]
        print('Dealer hand', self.dealer_hand)

    def dealerLogic(self, dealer_hand, deck):
        print('Dealer hand', dealer_hand)
        while self.game.calculate_hand(dealer_hand) < 17:
            dealer_hand.append(self.game.deal_card(deck))
        print('Dealer hand', dealer_hand)
        return dealer_hand
    

