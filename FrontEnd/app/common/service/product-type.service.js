export default function productTypeService($http) {
    var service = this;

    service.getAllProductTypes = function () {
        return $http({
            method: "GET",
            url: ES_REST_SERVER_URI + "/product-types"
        }).then(function (response) {
            return response.data;
        });
    };

    service.addProductType = function (productType) {
        return $http({
            method : "POST",
            url : ES_REST_SERVER_URI + "/product-types",
            data : productType
        }).then(function (response) {
            return response.data;
        });
    };

    service.editProductType = function (productType) {
        return $http({
            method : "PUT",
            url : ES_REST_SERVER_URI + "/product-types/" + productType.id,
            data : productType
        }).then(function (response) {
            return response.data;
        });
    };

    service.deleteProductType = function (productTypeId) {
        return $http({
            method : "DELETE",
            url : ES_REST_SERVER_URI + "/product-types/" + productTypeId
        });
    };
}
