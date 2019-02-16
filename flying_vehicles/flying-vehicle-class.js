'use strict';

class FlyingVehicle {
  constructor (name, passengers) {
    this.name = name;
    this.passengers = passengers;
  }
  fly () {
    return 'Fly!';
  }
  crash () {
    return 'AAAHHH!!!';
  }
}

class Airplane extends FlyingVehicle {
  constructor (name, exits) {
    super(name, 30);
    this.exits = exits;
  }
  evade() {
    return 'Do a barrel-roll!';
  }
}

class Helicopter extends FlyingVehicle {
  constructor (name, machineGuns) {
    super(name, 5);
    this.machineGuns = machineGuns;
  }
}

module.exports = {Airplane, Helicopter};