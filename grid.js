'use strict';

class Grid {
  constructor(length, width) {
    if(this._isValidInput(length, width)) {
      this.length = length;
      this.width = width;
    } else {
      return {invalid:true};
    }
  }

  _isValidInput(length, width) {
    if ((Number.isInteger(length)) && (Number.isInteger(width))) {
      return true;
    } else {
      return false;
    }
  }

  getDimensions() {
    return {
      length: this.length,
      width: this.width
    }
  }
}

module.exports = Grid;