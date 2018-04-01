export var esProductListComponent = {
    template : require("./es-product-list.template.html"),
    controller : ProductListController
};

function ProductListController(productService, $state, $stateParams) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        setNewsList();
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

    $ctrl.addToChart = function (newsId) {

    };

    var availableLimits  = [10, 20, 30, 50];

    function setNewsList() {
        var page = parseInt($stateParams.page, 10);
        var limit = parseInt($stateParams.limit, 10);
        if (availableLimits.indexOf(limit) == -1) {
            limit = 10;
        }

        var offset = (page - 1) * limit;
        var promise = productService.getAllProducts();
        promise.then(function (response) {
            $ctrl.productList = response;
            $ctrl.itemsPerPage = limit;
            $ctrl.currentPage = page;
        }, function (errResponse) {
            $ctrl.errorMessage = "Гауно";
        });
    }
}