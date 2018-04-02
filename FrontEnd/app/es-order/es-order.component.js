var esOrderComponent = {
    templateUrl : "./es-order/es-order.template.html",
    controller : OrderController,
    bindings : {
        order : '<'
    }
};

function OrderController(orderService, errorMessageService, $stateParams) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.orderId = $stateParams.orderId;
        $ctrl.prevState = (!$stateParams.prevState.name) ? { name: "welcome", params: {} } : $stateParams.prevState;
    };

    function getProductById() {
        var promise = orderService.getOrderById($stateParams.orderId);
        promise.then(function (order) {
            $ctrl.order = order;
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    }
}