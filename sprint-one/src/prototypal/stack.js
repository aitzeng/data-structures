var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    var removedStr = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return removedStr;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};

