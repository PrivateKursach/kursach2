esAddProductModalComponent = {
    templateUrl : "./es-add-product-modal/es-add-product-modal.template.html",
    controller : AddProductModalController,
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
};

function AddProductModalController(productService, productTypeService, errorMessageService, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
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
        var promise = productService.addProduct($ctrl.product);
        promise.then(function (createdProduct) {
            $ctrl.close();
            $state.go("product", { productId : createdProduct.id });
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    };
}