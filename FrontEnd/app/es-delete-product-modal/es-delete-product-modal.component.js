export var esDeleteProductModalComponent = {
    template : require("./es-delete-product-modal.template.html"),
    controller : DeleteProductModalController,
    bindings : {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function DeleteProductModalController(productService, errorMessageService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.productId = $ctrl.resolve.productId;
    };

    $ctrl.deleteProduct = function () {
        var promise = productService.deleteProduct($ctrl.productId);
        promise.then(function () {
            $ctrl.close();
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}