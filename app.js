const budgetController = (function() {

})();

const UIController = (function() {

})();

const controller = (function(budgetCtrl, UICtrl) {
    const ctrlAddItem = function () {

    }
    document.querySelector('.add__btn').addEventListener('click',  ctrlAddItem)

    document.addEventListener('keypress', function(e) {
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    })
})(budgetController, UIController);