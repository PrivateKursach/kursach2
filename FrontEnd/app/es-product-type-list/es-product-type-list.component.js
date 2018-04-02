var esProductTypeListComponent = {
    templateUrl : "./es-product-type-list/es-product-type-list.template.html",
    controller : ProductTypeListController
};

function ProductTypeListController(productTypeService, modalService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        setProductTypeList();
    };
    

    $ctrl.openAddProductTypeModal = function () {
        modalService.openAddProductTypeModal();
    };

    $ctrl.openEditProductTypeModal = function (productTypeId) {
        modalService.openEditProductTypeModal(productTypeId);
    };

    $ctrl.openDeleteProductTypeModal = function (productTypeId) {
        modalService.openDeleteProductTypeModal(productTypeId);
    };

    function setProductTypeList() {
        var promise = productTypeService.getAllProductTypes();
        promise.then(function (productTypeList) {
            $ctrl.productTypeList = productTypeList;
        }, function (errResponse) {
            $ctrl.errorMessage = "Ошибка";
        });
    }
}