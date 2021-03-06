var esProductListSidebarComponent = {
    templateUrl: './es-product-list-sidebar/es-product-list-sidebar.template.html',
    controller: ProductListSidebarController,
    bindings: {
        innerCtrl: '=',
        typesIds: '<',
        minPrice: '<',
        maxPrice: '<',
        onUpdate: '&'
    }
};

function ProductListSidebarController(productTypeService, errorMessageService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.displayingSearchTypes = false;
        setDefaultTypes();

        $ctrl.innerCtrl = {
            refreshContent: function () {
                setDefaultTypes();
            }
        };
    };

    $ctrl.isActiveFilterType = function (typeId) {
        return $ctrl.typesIds.indexOf(String(typeId)) != -1;
    };

    $ctrl.toggleFilterType = function (typeId) {
        var indexOfType = $ctrl.typesIds.indexOf(String(typeId));
        if (indexOfType == -1) {
            $ctrl.typesIds[$ctrl.typesIds.length] = String(typeId);
        } else {
            $ctrl.typesIds.splice(indexOfType, 1);
        }

        $ctrl.onUpdate({ typesIds: $ctrl.typesIds, minPrice: $ctrl.minPrice, maxPrice: $ctrl.maxPrice });
    };

    $ctrl.searchByPrice = function () {
        $ctrl.onUpdate({ typesIds: $ctrl.typesIds, minPrice: $ctrl.minPrice, maxPrice: $ctrl.maxPrice });
    };

    $ctrl.resetFilters = function () {
        $ctrl.onUpdate({ typesIds: [], minPrice: null, maxPrice: null });
    };

    function setDefaultTypes() {
        var typesPromise = productTypeService.getAllProductTypes();
        typesPromise.then(function (types) {
            $ctrl.sidebarTypes = types;
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    }

}