// 'use strict';

describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  it('has no planes by default', function(){
    expect(airport.planes_in_hangar()).toEqual([]);
  });

  it('can instruct a plane to land', function(){
    airport.land(plane);
    expect(airport.planes_in_hangar()).toContain(plane)
  });
});
