function sessionService($http) {
    var service = this;

    service.getSalesByTypeStats = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/stats/sales-by-type"
        }).then(function (response) {
            return response.data;
        });
    };

    service.getNumberOfProductsStats = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/stats/number-of-products"
        }).then(function (response) {
            return response.data;
        });
    };

    service.getProductByTypeStats = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/stats/product-by-type"
        }).then(function (response) {
            return response.data;
        });
    };
}