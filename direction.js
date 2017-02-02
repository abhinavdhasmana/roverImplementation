'use strict';

class Direction {
  constructor() {

  }

  getLeftDirection(currentDirection) {
    const nextLeftMove = {
      'N': 'W',
      'W': 'S',
      'S': 'E',
      'E': 'N',
    }
    return nextLeftMove[currentDirection];
  }

  getRightDirection(currentDirection) {
    const nextRightMove = {
      'N': 'E',
      'W': 'N',
      'S': 'W',
      'E': 'S',
    }
    return nextRightMove[currentDirection];
  }
}

module.exports = Direction;