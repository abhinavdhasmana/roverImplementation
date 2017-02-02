'use strict';

const Grid = require('./grid');
const Rover = require('./rover');
// TODO: check for invalid cases.
const grid = new Grid(5, 5);
const roverOne = new Rover(1, 2, 'N');

['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M', 'M'].forEach((instruction) => {
  roverOne.executeInstruction(grid, instruction);
});
console.log(roverOne.getPosition());
