/*
============================================
; Title:  factory-example1.js
; Author: Andy Osmani
; Modified By: Professor Krasso
; Date:   27 February 2019
; Description: Demonstrates the use of the Factory Pattern
;              in a JavaScript program.
;===========================================
*/

function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

function Truck(options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options) {
  if (options.vehicleType === "car") {
    this.vehicleClass = Car;
  } else {
    this.vehicleClass = Truck;
  }

  return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});

console.log(car instanceof Car);
console.log(car);

var truckFactory = new VehicleFactory();
var truck = truckFactory.createVehicle({
  vehicleType: "truck",
  state: "new",
  color: "black",
  wheelSize: "medium"
});

console.log(truck instanceof Truck);
console.log(truck);
