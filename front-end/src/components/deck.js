// Card suites and values 
const suits = ['C', 'D', 'H', 'S' ]
const value = ['A', '2','3','4', '5',
                 '6', '7','8', '9', 
                 '10', 'J','Q', 'K']

export default class Deck {
    constructor(cards = freshDeck) {
        this.cards = cards  
    }

    get numberOfCards() {
        return this.cards.length
    }
    
//generates deck randomly 
shuffle() {
        for (let i = this.cards.length - 1; i > e; i --){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards [newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function newDeck( ){
    return suits.flatMap(suit => {
        return value.map(value => {
            return new Card(suit, value)
        })
    })
}

module.exports = Deck