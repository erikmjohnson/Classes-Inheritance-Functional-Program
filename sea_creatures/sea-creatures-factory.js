'use strict';

const SeaCreature = function (name, bubbles) {
  this.name = name;
  this.bubbles = bubbles;
}

function Fish (name) {
  const newFish = Object.assign (
    {},
    {name},
    {swim},
    {getEaten},
    new SeaCreature (name, 30)
  );

  function swim () {
    return 'I knows hows to swims!';
  }

  function getEaten () {
    return 'Oh knows! I got caught!';
  }

  return Object.freeze(newFish);
}

function Lobster (name, pinchPower) {
  const newLobster = Object.assign (
    {},
    {name},
    {pinchPower},
    {swim},
    {pinch},
    new SeaCreature(name, 15)
  );
  function swim () {
    return 'I knows hows to swims!';
  }
  function pinch () {
    return `I peeeeench, Damage: ${this.pinchPower}`;
  }

  return Object.freeze(newLobster);
}

module.exports = {Fish, Lobster};