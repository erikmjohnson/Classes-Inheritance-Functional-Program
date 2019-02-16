'use strict';

class SeaCreature {
  constructor(name, bubbles) {
    this.name = name;
    this.bubbles = bubbles;
  }
  swim () {
    return 'I knows hows to swims!';
  }
}

class Fish extends SeaCreature {
  constructor (name) {
    super(name, 30);
  }
  getEaten () {
    return 'Oh knows! I got caught!';
  }
}

class Lobster extends SeaCreature {
  constructor (name, pinchPower) {
    super(name, 15);
    this.pinchPower = pinchPower;
  }

  pinch () {
    return `I peeeeench, Damage: ${this.pinchPower}`;
  }
}

module.exports = {Fish, Lobster};