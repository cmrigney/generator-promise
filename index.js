var Promise = require('bluebird');

var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;

if(!GeneratorFunction.prototype.prototype.promise) {
  GeneratorFunction.prototype.prototype.promise = function() {
    var genFunc = this;
    return Promise.coroutine(function* wrapper() {
      return yield* genFunc;
    })();
  };
}
