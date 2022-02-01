const pokemon = require('./test')

window.onload = () => {
    
    // Task 1: Set up the State of the game.
    let currentRow = 1;
    const buttons = document.getElementsByClassName('keyboard-button')
    console.log(pokemon.results.find(pokemon => pokemon.name.length === 5));
}