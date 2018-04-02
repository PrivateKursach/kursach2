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
        var modalInstance = modalService.openAddProductTypeModal();
        modalInstance.result.then(function () {
            setProductTypeList();
        });
    };

    $ctrl.openEditProductTypeModal = function (productTypeId) {
        var modalInstance = modalService.openEditProductTypeModal(productTypeId);
        modalInstance.result.then(function () {
            setProductTypeList();
        });
    };

    $ctrl.openDeleteProductTypeModal = function (productTypeId) {
        var modalInstance = modalService.openDeleteProductTypeModal(productTypeId);
        modalInstance.result.then(function () {
            setProductTypeList();
        });
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