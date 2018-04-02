function productTypeService($http) {
    var service = this;

    service.getAllProductTypes = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/product-types"
        }).then(function (response) {
            return response.data;
        });
    };

    service.getProductTypeById = function (productTypeId) {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/product-types/" + productTypeId
        }).then(function (response) {
            return response.data;
        });
    };

    service.addProductType = function (productType) {
        return $http({
            method : "POST",
            url : "http://localhost:8081/rest/product-types",
            data : productType
        }).then(function (response) {
            return response.data;
        });
    };

    service.editProductType = function (productType) {
        return $http({
            method : "PUT",
            url : "http://localhost:8081/rest/product-types/" + productType.id,
            data : productType
        }).then(function (response) {
            return response.data;
        });
    };

    service.deleteProductType = function (productTypeId) {
        return $http({
            method : "DELETE",
            url : "http://localhost:8081/rest/product-types/" + productTypeId
        });
    };
}
