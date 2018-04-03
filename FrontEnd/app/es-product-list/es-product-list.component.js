var esProductListComponent = {
    templateUrl : "./es-product-list/es-product-list.template.html",
    controller : ProductListController
};

function ProductListController(productService, $state, $stateParams, $cookies, $rootScope, sessionService, modalService) {
    var $ctrl = this;

    $ctrl.cart = [];

    $ctrl.$onInit = function () {
        $ctrl.filterTypesIds = ($stateParams.type) ? $stateParams.type.toString().split(",") : [];
        $ctrl.filterMinPrice = parseInt($stateParams.minPrice, 10);
        $ctrl.filterMaxPrice = parseInt($stateParams.maxPrice, 10);

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

    $ctrl.sidebarUpdated = function (typesIds, minPrice, maxPrice) {
        $state.go('.', { page: 1, type: (typesIds.length == 0) ? null : typesIds.toString(), minPrice: minPrice, maxPrice: maxPrice}, { notify: false });
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

    var availableLimits  = [12, 24, 36, 48];

    function setProductList() {
        var page = parseInt($stateParams.page, 10);
        var limit = parseInt($stateParams.limit, 10);
        if (availableLimits.indexOf(limit) == -1) {
            limit = 12;
        }

        var offset = (page - 1) * limit;
        var promise = productService.getAllProducts(offset, limit, $ctrl.filterTypesIds, $ctrl.filterMinPrice, $ctrl.filterMaxPrice);
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