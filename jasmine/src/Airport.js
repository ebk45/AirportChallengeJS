// 'use strict';

function Airport() {
  this.hangar = [];
}

Airport.prototype.planes_in_hangar = function() {
  console.log(this.hangar)
  return this.hangar
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
};

