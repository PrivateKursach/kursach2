var esAcceptOrderModalComponent = {
    templateUrl : "./es-accept-order-modal/es-accept-order-modal.template.html",
    controller : AcceptOrderModalController,
    bindings : {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function AcceptOrderModalController(orderService, errorMessageService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.orderId = $ctrl.resolve.orderId;
    };

    $ctrl.acceptOrder = function () {
        var promise = orderService.acceptOrder($ctrl.orderId);
        promise.then(function () {
            $ctrl.close();
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}