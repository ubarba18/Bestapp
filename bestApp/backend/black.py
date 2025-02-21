import random

class blackJack:
    suits = ["♠", "♥", "♦", "♣"]
    values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]

    def create_deck(self):
        deck = []
        for suit in self.suits:
            for value in self.values:
                deck.append(str(value) + suit)
        return deck

    def shuffle_deck(self, deck):
        random.shuffle(deck)
        return deck

    def deal_card(self, deck):   
        return deck.pop()   


    def calculate_hand(self, hand):
        total = 0
        values = []
        for card in hand:
            values = card[:-1]
            #print(f"Extracted value: '{values}'")
            if values == 'J' or values == 'Q' or values == 'K':
                total += 10
            elif values == 'A':
                total += 11
            else:
                total += int(values)
                # print('buster', hand,'total' ,total)
        if total > 21:
            for card in hand:
                if card == "A":
                    total -= 10
                if total <= 21:
                    break
        return total

    def isBlackjack(self, hand):
        if len(hand) == 2 and self.calculate_hand(hand) == 21:
            return True
        return False

    def isBust(self, hand):
        # print('what is going on')
        # print('Hand', hand)
        #print('Total', self.calculate_hand(hand))
        if int(self.calculate_hand(hand)) > 21:
            # print('Bust')
            return True
        print('Not Bust')
        return False

    def double_down(self, hand, deck):
        hand.append(self.deal_card(deck))
        return hand

    def hit(self, hand, deck):
        hand.append(self.deal_card(deck))
        # print('Hand HIt', hand)
        # print('Total', self.calculate_hand(hand))
        return hand

    def stand(self, hand):
        return hand

    def isWinner(self, player_hand, dealer_hand):
        if self.isBlackjack(player_hand) and self.isBlackjack(dealer_hand):
            return "Push"
        elif self.isBlackjack(player_hand):
            return "Player"
        elif self.isBlackjack(dealer_hand):
            return "Dealer"
        elif self.isBust(player_hand):
            return "Dealer"
        elif self.isBust(dealer_hand):
            return "Player"
        elif self.calculate_hand(player_hand) > self.calculate_hand(dealer_hand):
            return "Player"
        elif self.calculate_hand(player_hand) < self.calculate_hand(dealer_hand):
            return "Dealer"
        else:
            return "Push"





        


