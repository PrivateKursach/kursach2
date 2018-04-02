export var esEditProductModalComponent = {
    template : require("./es-edit-product-modal.template.html"),
    controller : EditProductModalController,
    bindings : {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function EditProductModalController(productService, productTypeService, errorMessageService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.productId = $ctrl.resolve.productId;
        var promise = productService.getProductById($ctrl.productId);
        promise.then(function (product) {
            $ctrl.product = product;
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
        $ctrl.product = {
            types: []
        };
        productTypeService.getAllProductTypes().then(function (types) {
            $ctrl.types = types;
        });
    };

    $ctrl.selectType = function ($item, $model, $label, $event) {
        $ctrl.typesInput = "";

        var typeIndex = $ctrl.product.types.findIndex(function (type, index, types) {
            if (type.id == $item.id) {
                return true;
            }
        });

        if (typeIndex == -1) {
            $ctrl.product.types.push($item);
        }
    };

    $ctrl.removeType = function (typeToRemove) {
        var typeIndex = $ctrl.product.types.findIndex(function (type, index, types) {
            if (type.id == typeToRemove.id) {
                return true;
            }
        });

        $ctrl.product.types.splice(typeIndex, 1);
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