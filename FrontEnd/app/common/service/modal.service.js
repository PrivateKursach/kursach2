export default function modalService($uibModal) {
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
    
}