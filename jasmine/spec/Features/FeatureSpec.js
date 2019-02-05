'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    airport.land(plane);
    expect(airport.hangar()).toContain(plane);
  });

  it('planes can be instructed to takeoff from an airport', function(){
    airport.takeoff(plane);
    expect(airport.hangar()).not.toContain(plane);
  });
});
