export var esProductListComponent = {
    template : require("./es-product-list.template.html"),
    controller : ProductListController
};

function ProductListController(productService, $state, $stateParams, $cookies, $rootScope, sessionService, modalService) {
    var $ctrl = this;

    $ctrl.cart = [];

    $ctrl.$onInit = function () {
        setProductList();
        populateCart();
        $ctrl.root = $rootScope;
    };

    $ctrl.getStateInfo = function () {
        return {
            name: "welcome",
            params: $stateParams
        };
    };

    $ctrl.pageChanged = function (currentPage) {
        $state.go('.', { page: currentPage }, { notify: false });
    };

    $ctrl.itemsPerPageChanged = function (itemsPerPage) {
        $state.go('.', { page: 1, limit: itemsPerPage }, { notify: false });
    };

    $ctrl.addToCart = function (product) {
        $ctrl.cart.push(product);
        $cookies.putObject("cartData", $ctrl.cart);
    };

    $ctrl.inCart = function (productId) {
        var inCart = false;
        $ctrl.cart.forEach(function(item, i, arr) {
            if (item.id == productId) {
                inCart = true;
            }
        });
        return inCart;
    };

    $ctrl.removeFromCart = function (productId) {
        var indexOf = -1;
        $ctrl.cart.forEach(function(item, i, arr) {
            if (item.id == productId) {
                indexOf = i;
            }
        });
        if (indexOf > -1) {
            $ctrl.cart.splice(indexOf, 1);
        }
        $cookies.putObject("cartData", $ctrl.cart);
    };
    
    $ctrl.isAdmin = function () {
        return sessionService.isAdmin($ctrl.root);
    };

    $ctrl.openAddProductModal = function () {
        modalService.openAddProductModal();
    };

    var availableLimits  = [10, 20, 30, 50];

    function setProductList() {
        var page = parseInt($stateParams.page, 10);
        var limit = parseInt($stateParams.limit, 10);
        if (availableLimits.indexOf(limit) == -1) {
            limit = 10;
        }

        var offset = (page - 1) * limit;
        var promise = productService.getAllProducts(offset, limit);
        promise.then(function (response) {
            $ctrl.productList = response.productList;
            $ctrl.totalItems = response.totalCount;
            $ctrl.itemsPerPage = limit;
            $ctrl.currentPage = page;
        }, function (errResponse) {
            $ctrl.errorMessage = "Гауно";
        });
    }

    function populateCart() {
        if ($cookies.get('cartData')) {
            $ctrl.cart =  $cookies.getObject('cartData');
        }
    }
}