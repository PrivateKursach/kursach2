export default function modalService($uibModal) {
    var service = this;

    service.openAddProductModal = function () {
        return $uibModal.open({
            component : "esAddProductModal"
        });
    };

    service.openEditProductModal = function (newsId) {
        return $uibModal.open({
            component : "esEditProductModal",
            resolve : {
                newsId : function () {
                    return newsId;
                }
            }
        });
    };

    service.openDeleteProductModal = function (newsId) {
        return $uibModal.open({
            component : "esDeleteProductModal",
            resolve : {
                newsId : function () {
                    return newsId;
                }
            }
        });
    };
    
}