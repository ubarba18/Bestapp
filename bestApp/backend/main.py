from flask import Flask, request, jsonify
import random
from blackJGame import blackJack
from dealer import dealerLogic

app = Flask(__name__)

game = blackJack()


suits = ["♠", "♥", "♦", "♣"]
values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]

player_hand = []
dealer_hand = []
deck = game.create_deck()


@app.route('/start', methods=['POST'])
def start():
    global player_hand, dealer_hand, deck
    deck = game.shuffle_deck(deck)
    player_hand = [game.deal_card(deck), game.deal_card(deck)]
    dealer_hand = [game.deal_card(deck), game.deal_card(deck)]
    return jsonify({
        'player_hand': player_hand, 
        'dealer_hand': dealer_hand
        })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)