'use strict';

const flyingVehicle = require('../../flying_vehicles/flying-vehicle-factory.js');

describe('Flying Vehicle', () => {

  describe('Airplane', () => {

    let airplane = new flyingVehicle.Airplane('foo');

    it('Can carry 30 passengers', () => {
      expect(airplane.passengers).toEqual(30);
    });

    it('can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });

    it('can crash', () => {
      expect(airplane.crash()).toBeTruthy();
    });

    it('can evade', () => {
      expect(airplane.evade()).toBeTruthy();
    });

  });

  describe('Helicopter', () => {

    let helicopter = new flyingVehicle.Helicopter('foo');

    it('Can carry 5 passengers', () => {
      expect(helicopter.passengers).toEqual(5);
    });

    it('can drive', () => {
      expect(helicopter.fly()).toBeTruthy();
    });

    it('can stop', () => {
      expect(helicopter.crash()).toBeTruthy();
    });

    it('cannot do a barrel-roll', () => {
      expect(helicopter.evade).toBeUndefined();
    });

  });

});
