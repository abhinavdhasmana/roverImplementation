'use strict';

class Grid {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getDimensions() {
    return {
      length: this.length,
      width: this.width
    }
  }
}

module.exports = Grid;