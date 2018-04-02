esAddProductTypeModalComponent = {
    templateUrl : "./es-add-product-type-modal/es-add-product-type-modal.template.html",
    controller : AddProductTypeModalController,
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function AddProductTypeModalController(productTypeService, errorMessageService) {
    var $ctrl = this;

    $ctrl.save = function () {
        var promise = productTypeService.addProductType($ctrl.productType);
        promise.then(function (createdProductType) {
            $ctrl.close();
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}