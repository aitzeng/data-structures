var Stack = function() {

  this.storage = {};

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  var removedStr = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return removedStr;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
