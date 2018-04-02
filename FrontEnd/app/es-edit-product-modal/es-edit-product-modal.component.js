export var esEditProductModalComponent = {
    template : require("./es-edit-product-modal.template.html"),
    controller : EditProductModalController,
    bindings : {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function EditProductModalController(productService, errorMessageService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.productId = $ctrl.resolve.productId;
        var promise = productService.getProductById($ctrl.productId);
        promise.then(function (product) {
            $ctrl.product = product;
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };

    $ctrl.save = function () {
        var promise = productService.editProduct($ctrl.product);
        promise.then(function () {
            $ctrl.close();
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}