var esCartComponent = {
    templateUrl : "./es-cart/es-cart.template.html",
    controller : CartController
};

function CartController(modalService, sessionService, $rootScope, $cookies) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.cartData = {};
        populateCart();
        $ctrl.totalPrice = 0;
        $ctrl.cartData.forEach(function (item, i, array) {
            $ctrl.totalPrice += parseInt(item.price, 10);
        });
    };

    $ctrl.isLogged = function () {
        return sessionService.isLogged($rootScope)
    };
    
    $ctrl.createOrder = function () {
        modalService.openCreateOrderModal();
    };

    function populateCart() {
        if ($cookies.get("cartData")) {
            $ctrl.cartData = $cookies.getObject("cartData");
        }
    }
}