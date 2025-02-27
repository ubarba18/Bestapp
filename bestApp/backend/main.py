from flask import Flask, request, jsonify
import random
from blackJGame import blackJack
from dealer import dealerLogic
from flask_cors import CORS
from flask import Flask, request, jsonify
app = Flask(__name__)
CORS(app)
game = blackJack()



suits = ["♠", "♥", "♦", "♣"]
values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]

player_hand = []
dealer_hand = []
deck = game.create_deck()
dealer = dealerLogic(deck)

@app.route('/start', methods=['POST', 'GET', 'OPTIONS'])
def start():
    global player_hand, dealer_hand, deck
    deck = game.shuffle_deck(deck)
    player_hand = [game.deal_card(deck), game.deal_card(deck)]
    dealer_hand = [game.deal_card(deck), game.deal_card(deck)]
    print('Player hand2', player_hand, 'Player total', game.calculate_hand(player_hand))
    return jsonify({
        "message": "Game has started",
        'player_hand': player_hand, 
        'dealer_hand': dealer_hand
        })

@app.route('/hit', methods=['POST', 'GET', 'OPTIONS'])
def hit():
    global player_hand, deck
    new_card = game.deal_card(deck)
    player_hand.append(new_card)
    print('HIT!!!! Player hand2', player_hand, 'Player total', game.calculate_hand(player_hand))
    if game.isBust(player_hand):
                        return jsonify({ 
                            'new_card': new_card,
                            'player_hand': player_hand,
                            'message': 'Player Busted Game over'
                        })
    return jsonify({
        'new_card': new_card,
        'player_hand': player_hand,
    })

@app.route('/stand', methods=['POST', 'GET', 'OPTIONS'])
def stand():
    global player_hand, deck, dealer_hand
    print('stand!!!! Player hand2', player_hand, 'Player total', game.calculate_hand(player_hand))
    player_hand = game.stand(player_hand)
    dealer.dealerLogic(dealer.dealer_hand, deck)
    print('Dealer hand', dealer.dealer_hand)
    print(game.isWinner(player_hand, dealer.dealer_hand), 'is the Winner!!\n')
    message = game.isWinner(player_hand, dealer.dealer_hand)
    #print(game.isWinner(player_hand, dealer.dealer_hand))
    loss = True
    return jsonify({
        'player_hand': player_hand,
        'dealer_hand': dealer_hand,
        'message': f"{message} is the Winner!!"

    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)