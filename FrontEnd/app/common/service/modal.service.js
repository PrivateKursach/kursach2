function modalService($uibModal) {
    var service = this;

    service.openAddProductModal = function () {
        return $uibModal.open({
            component : "esAddProductModal"
        });
    };

    service.openEditProductModal = function (productId) {
        return $uibModal.open({
            component : "esEditProductModal",
            resolve : {
                productId : function () {
                    return productId;
                }
            }
        });
    };

    service.openDeleteProductModal = function (productId) {
        return $uibModal.open({
            component : "esDeleteProductModal",
            resolve : {
                productId : function () {
                    return productId;
                }
            }
        });
    };

    service.openAddProductTypeModal = function () {
        return $uibModal.open({
            component : "esAddProductTypeModal"
        });
    };

    service.openEditProductTypeModal = function (productTypeId) {
        return $uibModal.open({
            component : "esEditProductTypeModal",
            resolve : {
                productTypeId : function () {
                    return productTypeId;
                }
            }
        });
    };

    service.openDeleteProductTypeModal = function (productTypeId) {
        return $uibModal.open({
            component : "esDeleteProductTypeModal",
            resolve : {
                productTypeId : function () {
                    return productTypeId;
                }
            }
        });
    };
    
    service.openAcceptOrderModal = function (orderId) {
        return $uibModal.open({
            component : "esAcceptOrderModal",
            resolve : {
                orderId : function () {
                    return orderId;
                }
            }
        });
    };
    
    service.openCreateOrderModal = function () {
        return $uibModal.open({
            component : "esCreateOrderModal"
        });
    };
    
}