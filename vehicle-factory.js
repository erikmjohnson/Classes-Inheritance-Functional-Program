'use strict';
// ---------------------------------------------------------------------
// Vinicio - since I'm making a car factory, I still need the traditional
// constructor for Vehicle.
const Vehicle = function(name, wheels) {
	// Vinicio - this part will what in classes we call "costructor"
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};
// ---------------------------------------------------------------------
function Car(name,color) {
	// Vinicio - this is suppose to have the same interface as Vehicle,
	// but it should add the color
	const newCar = Object.assign(
			{},
			{color},
			{drive},
			{stop},
			new Vehicle(name, 4)
	);

	function drive () {
		return 'Moving Forward';
	}

	function stop () {
		return 'Stopping';
	}
	// Vinicio - this is not a "HARD" requirement to have a factory
	return Object.freeze(newCar);
}

function Motorcycle(name) {
	const newMotorcycle = Object.assign(
		{},
		{drive},
		{stop},
		{wheelie},
		new Vehicle(name, 2)
	);
	function drive () {
		return 'Moving Forward';
	}

	function stop () {
		return 'Stopping';
	}

	function wheelie() {
		return 'Wheee!';
	}

	return Object.freeze(newMotorcycle);
}

module.exports = {Car, Motorcycle};
