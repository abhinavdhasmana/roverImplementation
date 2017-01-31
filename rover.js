'use strict';

class Rover {
  constructor (xPosition, yPosition, orientation) {
    this.xPosition = xPosition,
    this.yPosition = yPosition,
    this.orientation = orientation
  }

  _getLeftOrientation() {
    const nextLeftMove = {
      'N': 'W',
      'W': 'S',
      'S': 'E',
      'E': 'N',
    }
    return nextLeftMove[this.orientation];
  }

  _getRightOrientation() {
    const nextLeftMove = {
      'N': 'E',
      'W': 'N',
      'S': 'W',
      'E': 'S',
    }
    return nextLeftMove[this.orientation];
  }

  _isValidMove(grid) {
    if (((this.yPosition - 1) < 0) || ((this.xPosition - 1) < 0)
      || ((this.yPosition + 1) >= grid.width) || ((this.xPosition + 1) >= grid.length)) {
        return false;
      }
    else
      return true;
  }

  _setNextPosition(grid) {
    switch(this.orientation) {
      case 'N':
        this.yPosition = (this.yPosition - 1) >= 0 ? (this.yPosition - 1) : this.yPosition;
        break;
      case 'S':
        this.yPosition = (this.yPosition + 1) >= grid.width ? this.yPosition : (this.yPosition + 1);
        break;
      case 'E':
        this.xPosition = (this.xPosition + 1) >= grid.length ? this.xPosition : (this.xPosition + 1) ;
        break;
      case 'W':
        this.xPosition = (this.xPosition - 1) >= 0 ? (this.xPosition - 1) : this.xPosition;
        break;
    }
  }

  executeInstruction(grid, instruction) {
    switch(instruction) {
      case 'L':
      this.orientation = this._getLeftOrientation(instruction);
      break;
      case 'R':
        this.orientation = this._getRightOrientation(instruction);
      break;
      case 'M':
        this._setNextPosition(grid);
      break;
    }
  }

  getPosition() {
    return {
      xPosition: this.xPosition,
      yPosition: this.yPosition,
      orientation: this.orientation,
    }
  }
}

module.exports = Rover;