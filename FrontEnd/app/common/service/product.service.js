export default function productService($http) {
    var service = this;

    service.getAllProducts = function (offset, limit) {
        return $http({
            method: "GET",
            url: ES_REST_SERVER_URI + "/products?offset=" + offset + "&limit=" + limit
        }).then(function (response) {
            return {
                productList: response.data,
                totalCount: response.headers("X-Total-Count")
            };
        });
    };

    service.getProductById = function (productId) {
        return $http({
            method: "GET",
            url: ES_REST_SERVER_URI + "/products/" + productId
        }).then(function (response) {
            return response.data;
        });
    };

    service.addProduct = function (product) {
        return $http({
            method : "POST",
            url : ES_REST_SERVER_URI + "/products",
            data : product
        }).then(function (response) {
            return response.data;
        });
    };
}
