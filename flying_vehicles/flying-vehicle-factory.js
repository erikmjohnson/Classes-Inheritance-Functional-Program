'use strict';

const FlyingVehicle = function(name,passengers) {
  this.name = name;
  this.passengers = passengers;
};

function Airplane(name, exits) {
  const newAirplane = Object.assign(
    {},
    {exits},
    {fly},
    {crash},
    {evade},
    new FlyingVehicle(name, 30)
  );
  function fly () {
    return 'Fly!';
  }
  function crash () {
    return 'AAAHHH!!!';
  }
  function evade () {
    return 'Do a barrel-roll!';
  }
  return Object.freeze(newAirplane);
}

function Helicopter (name, machineGuns) {
  const newHelicopter = Object.assign(
    {},
    {fly},
    {crash},
    {machineGuns},
    new FlyingVehicle(name, 5)
  );
  function fly () {
    return 'Fly!';
  }
  function crash () {
    return 'AAAHHH!!!';
  }
  return Object.freeze(newHelicopter);
}

module.exports = {Airplane, Helicopter};