var esCartComponent = {
    templateUrl : "./es-cart/es-cart.template.html",
    controller : CartController
};

function CartController(orderService, sessionService, $rootScope, $cookies) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.cartData = {};
        populateCart();
    };

    $ctrl.isLogged = function () {
        return sessionService.isLogged($rootScope)
    };
    
    $ctrl.createOrder = function () {
        var order = {
            user: {
                id: $rootScope.sessionUserId
            },
            created_date: new Date(),
            products: $ctrl.cartData
        };
        orderService.createOrder(order).then(function (createdOrder) {
            
        });
    };

    function populateCart() {
        if ($cookies.get("cartData")) {
            $ctrl.cartData = $cookies.getObject("cartData");
        }
    }
}