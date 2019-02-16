'use strict';

const seaCreature = require('../../sea_creatures/sea-creatures-factory');

describe('Sea Creatures', () => {

  describe('Fish', () => {

    let fish = new seaCreature.Fish('Nemo');

    it('How many bubbles does nemo make a minute', () => {
      expect(fish.bubbles).toEqual(30);
    });

    it('can swim', () => {
      expect(fish.swim()).toBeTruthy();
    });

    it('can get eaten', () => {
      expect(fish.getEaten()).toBeTruthy();
    });

    it('can evade', () => {
      expect(fish.pinch).toBeUndefined();
    });

  });

  describe('Lobster', () => {

    let lobster = new seaCreature.Lobster('Sebastion', 9000);

    it('How many bubbles does Sebastion make a minute', () => {
      expect(lobster.bubbles).toEqual(15);
    });

    it('can swim', () => {
      expect(lobster.swim()).toBeTruthy();
    });

    it('can pinch', () => {
      expect(lobster.pinch()).toEqual('I peeeeench, Damage: 9000');
    });

  });

});
