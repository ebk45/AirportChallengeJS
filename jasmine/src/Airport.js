'use strict';

function Airport() {
  this.hangar = [];
}

Airport.prototype._hangar = function() {
  console.log("ellie")
  return this.hangar
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
};
