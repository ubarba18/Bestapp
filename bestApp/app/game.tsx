import { Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { JumpingTransition } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import React, { useState } from 'react';
import axios from "axios";

const cardImages = {
    "2♠": require("../assets/cards/spade_2.png"),
    "3♠": require("../assets/cards/spade_3.png"),
    "4♠": require("../assets/cards/spade_4.png"),
    "5♠": require("../assets/cards/spade_5.png"),
    "6♠": require("../assets/cards/spade_6.png"),
    "7♠": require("../assets/cards/spade_7.png"),
    "8♠": require("../assets/cards/spade_8.png"),
    "9♠": require("../assets/cards/spade_9.png"),
    "10♠": require("../assets/cards/spade_10.png"),
    "J♠": require("../assets/cards/spade_jack.png"),
    "Q♠": require("../assets/cards/spade_queen.png"),
    "K♠": require("../assets/cards/spade_king.png"),
    "A♠": require("../assets/cards/spade_ace.png"),

    "2♥": require("../assets/cards/heart_2.png"),
    "3♥": require("../assets/cards/heart_3.png"),
    "4♥": require("../assets/cards/heart_4.png"),
    "5♥": require("../assets/cards/heart_5.png"),
    "6♥": require("../assets/cards/heart_6.png"),
    "7♥": require("../assets/cards/heart_7.png"),
    "8♥": require("../assets/cards/heart_8.png"),
    "9♥": require("../assets/cards/heart_9.png"),
    "10♥": require("../assets/cards/heart_10.png"),
    "J♥": require("../assets/cards/heart_jack.png"),
    "Q♥": require("../assets/cards/heart_queen.png"),
    "K♥": require("../assets/cards/heart_king.png"),
    "A♥": require("../assets/cards/heart_ace.png"),

    "2♦": require("../assets/cards/diamond_2.png"),
    "3♦": require("../assets/cards/diamond_3.png"),
    "4♦": require("../assets/cards/diamond_4.png"),
    "5♦": require("../assets/cards/diamond_5.png"),
    "6♦": require("../assets/cards/diamond_6.png"),
    "7♦": require("../assets/cards/diamond_7.png"),
    "8♦": require("../assets/cards/diamond_8.png"),
    "9♦": require("../assets/cards/diamond_9.png"),
    "10♦": require("../assets/cards/diamond_10.png"),
    "J♦": require("../assets/cards/diamond_jack.png"),
    "Q♦": require("../assets/cards/diamond_queen.png"),
    "K♦": require("../assets/cards/diamond_king.png"),
    "A♦": require("../assets/cards/diamond_ace.png"),

    "2♣": require("../assets/cards/club_2.png"),
    "3♣": require("../assets/cards/club_3.png"),
    "4♣": require("../assets/cards/club_4.png"),
    "5♣": require("../assets/cards/club_5.png"),
    "6♣": require("../assets/cards/club_6.png"),
    "7♣": require("../assets/cards/club_7.png"),
    "8♣": require("../assets/cards/club_8.png"),
    "9♣": require("../assets/cards/club_9.png"),
    "10♣": require("../assets/cards/club_10.png"),
    "J♣": require("../assets/cards/club_jack.png"),
    "Q♣": require("../assets/cards/club_queen.png"),
    "K♣": require("../assets/cards/club_king.png"),
    "A♣": require("../assets/cards/club_ace.png"),
};

  

const GameScreen = () => {

    const [playerHand, setPlayerHand] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        start();
      }, []);


const start = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/start');
        setPlayerHand(response.data.player_hand || []);  // Set player hand to empty array if undefined
        setDealerHand(response.data.dealer_hand || []);
        console.log('Start', response.data);
    } catch (error) {
        console.error(error);
    }
};

const hit = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/hit');
        console.log('HIT Response:', response.data);  // Add a log to inspect the response
        const { new_card, player_hand, message } = response.data || [];
        //setPlayerHand(response.data.player_hand || []);
        console.log('player_hand:', player_hand, 'new_card:', new_card);
        if (player_hand) {
            setPlayerHand(player_hand);
        } else {
            console.error('No updated player hand found');
        }
    } catch (error) {
        console.error('Error hitting:', error);
    }
};

const stand = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/stand');
        console.log('Stand', response.data);
        const { dealer_hand } = response.data || [];
        if (dealer_hand) {
            setDealerHand(dealer_hand);
        }

    } catch (error) {
        console.error(error);
    }
};



const renderCard = (card) => {
    return <Image source={cardImages[card]} style={{ width: 100, height: 150 }} />;
};




return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
            onPress={start} // Navigate to 'Game' screen
            style={{
                backgroundColor: "blue",
                padding: 10,
                borderRadius: 5,
            }}
        >
            <Text style={{ color: "white", fontSize: 18 }}>Go to Game</Text>
        </TouchableOpacity>
        <Text>Game Screen</Text>
        <View style={styles.cardTable}>
            <View style={styles.cardRow}>
                <View style={styles.cardRow}>
                    {playerHand.map((card, index) => (
                    <View style={styles.card} key={index}>
                        <Image source={cardImages[card]} style={{ flex: 1 }} />
                    </View>
                    ))}
                </View>
            </View>
            <Text>Player Cards</Text>
            <Text>Dealer Cards</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
                onPress={hit} // Navigate to 'Game' screen
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    borderRadius: 5,
                }}>
                <Text>Hit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={stand} // Navigate to 'Game' screen
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    borderRadius: 5,
                }}>
                <Text>Stand</Text>
            </TouchableOpacity>
        </View>
    </View>
);
};

export default GameScreen;

const styles = {
    cardTable: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: "lightgray",
        width: 100,
        height: 140,
        marginRight: 10,  // Add space between cards
    },
    cardRow: {
        flexDirection: "row",  // Display cards in a row
        justifyContent: "flex-start",  // Align cards to the left
        alignItems: "center",
    },
};


