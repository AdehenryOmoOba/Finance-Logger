var form = document.querySelector("#form");
var type = document.querySelector("#type");
var toFrom = document.querySelector("#to-from");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var button = document.querySelector("#submit");
var container = document.querySelector("#container");
var Entry = /** @class */ (function () {
    function Entry(name, details, amount, type) {
        this.name = name;
        this.details = details;
        this.amount = amount;
        this.type = type;
    }
    Entry.prototype.format = function () {
        if (this.type === "invoice") {
            return "".concat(this.name, " owes $").concat(this.amount, " for ").concat(this.details);
        }
        else {
            return "".concat(this.name, " is owed $").concat(this.amount, " for ").concat(this.details);
        }
    };
    return Entry;
}());
button.addEventListener("click", function (e) {
    e.preventDefault();
    var transactionDetails = new Entry(toFrom.value, details.value, amount.valueAsNumber, type.value);
    var li = document.createElement("li");
    var h4 = document.createElement("h4");
    h4.textContent = type.value;
    li.appendChild(h4);
    li.append(transactionDetails.format());
    container.append(li);
    form.reset();
});
