// 'use strict';

describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  it('has no planes by default', function(){
    expect(airport.hangar()).toEqual([]);
  });

  it('can instruct a plane to land', function(){
    airport.land(plane);
    expect(airport.hangar()).toContain(plane)
  });

  it('can instruct a plane to takeoff', function(){
    airport.takeoff(plane);
    expect(airport.hangar()).not.toContain(plane)
  });
});
