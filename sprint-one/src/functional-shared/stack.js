var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {

  push: function(value) {
    this.storage[this.size()] = value;
  },

  pop: function() {
    var deletedStr = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return deletedStr;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};
