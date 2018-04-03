var esCartComponent = {
    templateUrl : "./es-cart/es-cart.template.html",
    controller : CartController
};

function CartController(modalService, sessionService, $rootScope, $cookies) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.cartData = {};
        populateCart();
    };

    $ctrl.isLogged = function () {
        return sessionService.isLogged($rootScope)
    };
    
    $ctrl.createOrder = function () {
        modalService.openCreateOrderModal();
    };
    
    $ctrl.removeFromCart = function (cartItemId) {
        var indexOf = -1;
        $ctrl.cartData.forEach(function(item, i, arr) {
            if (item.id == cartItemId) {
                indexOf = i;
            }
        });
        if (indexOf > -1) {
            $ctrl.cartData.splice(indexOf, 1);
        }
        $cookies.putObject("cartData", $ctrl.cartData);
        populateCart();
    };

    function populateCart() {
        if ($cookies.get("cartData")) {
            $ctrl.cartData = $cookies.getObject("cartData");
            $ctrl.totalPrice = 0;
            $ctrl.cartData.forEach(function (item, i, array) {
                $ctrl.totalPrice += parseInt(item.price, 10);
            });
        }
    }
}