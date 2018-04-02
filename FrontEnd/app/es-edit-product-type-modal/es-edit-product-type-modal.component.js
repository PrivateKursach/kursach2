esEditProductTypeModalComponent = {
    templateUrl : "./es-edit-product-type-modal/es-edit-product-type-modal.template.html",
    controller : EditProductTypeModalController,
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function EditProductTypeModalController(productTypeService, errorMessageService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.productTypeId = $ctrl.resolve.productTypeId;
        var promise = productTypeService.getProductTypeById($ctrl.productTypeId);
        promise.then(function (productType) {
            $ctrl.productType = productType;
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };

    $ctrl.save = function () {
        var promise = productTypeService.editProductType($ctrl.productType);
        promise.then(function (createdProductType) {
            $ctrl.close();
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}