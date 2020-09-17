// Budget Controller
var budgetController = (function () {
  // some code
})();

// Ui Controller
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be wither inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// Global App Controller
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.code === "Enter") {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    // TODO 1. Get the field input data
    var input = UICtrl.getInput();
    // TODO 2. Add the item to the budget controller
    // TODO 3. Add the new item to the UI
    // TODO 4. Calculate the budget
    // TODO 5. Display the budget on the UI
  };

  return {
    init: function () {
      console.log("Application Started");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

// Initialize application
controller.init();