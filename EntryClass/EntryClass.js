"use strict";
exports.__esModule = true;
var Entry = /** @class */ (function () {
  function Entry(name, details, amount) {
    this.name = name;
    this.details = details;
    this.amount = amount;
  }
  Entry.prototype.format = function () {
    return ""
      .concat(this.name, " owes ")
      .concat(this.amount, " for ")
      .concat(this.details);
  };
  return Entry;
})();

export default Entry;
