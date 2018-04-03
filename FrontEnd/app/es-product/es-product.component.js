var esProductComponent = {
    templateUrl : "./es-product/es-product.template.html",
    controller : ProductController,
    bindings : {
        product : '<'
    }
};

function ProductController(productService, errorMessageService, modalService, $stateParams, $state, $rootScope, sessionService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.productId = $stateParams.productId;
        $ctrl.prevState = (!$stateParams.prevState.name) ? { name: "welcome", params: {} } : $stateParams.prevState;
    };

    $ctrl.openEditProductModal = function (productId) {
        var modalInstance = modalService.openEditProductModal(productId);
        modalInstance.result.then(function () {
            getProductById();
        });
    };

    $ctrl.openDeleteProductModal = function (productId) {
        var modalInstance = modalService.openDeleteProductModal(productId);
        modalInstance.result.then(function () {
            $state.go("welcome");
        });
    };
    
    $ctrl.isAdmin = function () {
        return sessionService.isAdmin($rootScope);
    };

    function getProductById() {
        var promise = productService.getProductById($stateParams.productId);
        promise.then(function (product) {
            $ctrl.product = product;
        }, function (errResponse) {
            $ctrl.errorMessage = errorMessageService.getErrorMessageByHttpCode(errResponse.status);
        });
    }
}