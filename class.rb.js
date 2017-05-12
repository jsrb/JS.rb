
module.exports = String.prototype.class = function () {
  return typeof this.valueOf();
};

module.exports = Number.prototype.class = function () {
  return typeof this.valueOf();
};

module.exports = Boolean.prototype.class = function () {
  return typeof this.valueOf();
};

module.exports = Array.prototype.class = function () {
  if (Array.isArray(this.valueOf())) {
    return 'array';
  }
};

module.exports = Object.prototype.class = function () {
  return this.valueOf();
};

module.exports = Symbol.prototype.class = function () {
  return typeof this.valueOf();
};

/**
 * Testing:
 * - test for Object.prototype.class() === instanceof object
 */
