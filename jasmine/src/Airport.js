'use strict';

function Airport() {
  this._hangar = [];
}

Airport.prototype.hangar = function() {
  return this._hangar
};

Airport.prototype.land = function(plane) {
  this._hangar.push(plane)
};

Airport.prototype.takeoff = function(plane) {
  this._hangar.filter(function(eachPlane){ return eachPlane != plane })
};
