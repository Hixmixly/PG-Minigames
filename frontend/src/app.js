import React from 'react';
import Deck from '../src/components/deck';

function App() {
    const deck = new Deck();
    console.log(deck.cards);

    return (
        <div className="App">
            <h1>Go Fish Game</h1>
        </div>
    );
}

export default App;