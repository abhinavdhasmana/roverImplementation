'use strcit';

const Grid = require('../grid');
const expect = require('chai').expect;

describe('Grid initialization should work', () => {
  it ('when the inputs are integers', () => {
    const grid = new Grid(7, 8);
    expect(grid instanceof Grid).to.be.true;
  });
});

describe('Grid initialization should fail', () => {
  it ('when the inputs are strings', () => {
    const grid = new Grid('abc', 'efg');
    expect(grid instanceof Grid).to.be.false;
  });

  it ('when only one input is provided', () => {
    const grid = new Grid(7);
    expect(grid instanceof Grid).to.be.false;
  });

  it ('when input is an array', () => {
    const grid = new Grid([7], [8]);
    expect(grid instanceof Grid).to.be.false;
  });

  it ('when input is null', () => {
    const grid = new Grid(null, 7);
    expect(grid instanceof Grid).to.be.false;
  })
});