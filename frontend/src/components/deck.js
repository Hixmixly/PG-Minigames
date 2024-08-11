class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;  
    }

    get numberOfCards() {
        return this.cards.length;
    }
    
//generates deck randomly 
shuffle() {
        for (let i = this.cards.length - 1; i > 0; i --){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards [newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
        draw(count) {
            return this.cards.splice(0, count); 
    }
}


class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get name(){
        return `${this.value} of ${this.suit}`;
    }
}

//newDeck function 
function newDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    return suits.flatMap(suit => values.map(value => new Card(suit, value)));
}

export default Deck;