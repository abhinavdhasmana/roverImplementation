'use strict';

const Grid = require('./grid');
const Rover = require('./rover');

const grid = new Grid(5, 5); // check for invalid cases
const roverOne = new Rover(1, 2, 'N');

['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M', 'M'].forEach((instruction) => {
  roverOne.executeInstruction(grid, instruction);
});
console.log(roverOne.getPosition());
