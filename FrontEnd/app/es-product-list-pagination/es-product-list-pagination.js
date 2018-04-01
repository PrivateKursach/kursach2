export var esProductListPaginationComponent = {
    template: require('./es-product-list-pagination.template.html'),
    controller: ProductListPaginationController,
    bindings: {
        currentPage: '<',
        itemsPerPage: '<',
        totalItems: '<',
        onPageChanged: '&',
        onItemsPerPageChanged: '&'
    }
};

function ProductListPaginationController() {
    var $ctrl = this;

    $ctrl.setItemsPerPage = function (value) {
        $ctrl.itemsPerPage = value;
        $ctrl.onItemsPerPageChanged({ itemsPerPage: $ctrl.itemsPerPage });
    };

    $ctrl.pageChanged = function () {
        $ctrl.onPageChanged({ currentPage: $ctrl.currentPage });
    };
}
