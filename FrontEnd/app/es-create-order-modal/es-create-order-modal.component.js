var esCreateOrderModalComponent = {
    templateUrl : "./es-create-order-modal/es-create-order-modal.template.html",
    controller : CreateOrderModalController,
    bindings : {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function CreateOrderModalController(orderService, errorMessageService, $rootScope, $cookies, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.userId = $rootScope.sessionUserId;
        $ctrl.products = $cookies.getObject('cartData');
    };

    $ctrl.createOrder = function () {
        var order = {
            user: {
                id: $ctrl.userId
            },
            products: $ctrl.products
        };
        var promise = orderService.createOrder(order);
        promise.then(function (createdOrder) {
            $ctrl.close();
            $cookies.put('cartData', undefined);
            $cookies.putObject('cartData', undefined);
            $state.go('orders');
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}