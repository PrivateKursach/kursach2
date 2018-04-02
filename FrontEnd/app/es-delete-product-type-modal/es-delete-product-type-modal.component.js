var esDeleteProductTypeModalComponent = {
    templateUrl : "./es-delete-product-type-modal/es-delete-product-type-modal.template.html",
    controller : DeleteProductTypeModalController,
    bindings : {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function DeleteProductTypeModalController(productTypeService, errorMessageService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.productTypeId = $ctrl.resolve.productTypeId;
    };

    $ctrl.deleteProductType = function () {
        var promise = productTypeService.deleteProductType($ctrl.productTypeId);
        promise.then(function () {
            $ctrl.close();
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}