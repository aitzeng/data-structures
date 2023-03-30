var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage)[this.size() - 1] + 1] = value;
};

queueMethods.dequeue = function() {
  var deletedStr = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return deletedStr;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};