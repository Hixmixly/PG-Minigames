import React, {useState, useEffect} from 'react';
import Deck from '../src/components/deck';

function App() {
    const[cards, setCards] = useState([]);
    
    useEffect(() => {
        const deck = new Deck();
        
        console.log(deck.cards);
        
        deck.shuffle();
        
        setCards(deck.draw(5)) 
    }, []);
 

    return (
        <div className="App">
            <h1>Go Fish Game</h1>
            <div className='cards'>
                {cards.map((card, index) => (
                    <div key ={index}>
                        {card.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;