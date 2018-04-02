export var esAddProductModalComponent = {
    template : require("./es-add-product-modal.template.html"),
    controller : AddProductModalController,
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function AddProductModalController(productService, errorMessageService, $state) {
    var $ctrl = this;

    $ctrl.save = function () {
        var promise = productService.addProduct($ctrl.product);
        promise.then(function (createdProduct) {
            $ctrl.close();
            $state.go("product", { productId : createdProduct.id });
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}