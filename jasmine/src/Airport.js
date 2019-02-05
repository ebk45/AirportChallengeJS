// 'use strict';

function Airport() {
  this.hangar = [];
}

Airport.prototype.planes_in_hangar = function() {
  console.log(this.hangar)
  return this.hangar
};

Airport.prototype.land = function(plane) {
  console.log(this.hangar);  
  this.hangar.push(plane)
};

// a = new Airport();
// console.log(a.land('plane'))


