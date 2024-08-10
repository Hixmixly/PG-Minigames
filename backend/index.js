const express = require('express')
const cors = require('cors')
import Deck from '../components/cards'

const app = express ();
const port = process.env.PORT || 5000;
const deck = new Deck()
console.log(deck.cards)

app.use (cors());
app.use(express.json());

let player = "playerHand"