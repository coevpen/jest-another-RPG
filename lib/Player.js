const Potion = require('../lib/Potion');

// if no name provided, it will be an empty string
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    // gives a health potion and a random potion
    this.inventory = [new Potion('health'), new Potion()];
}

module.exports = Player;