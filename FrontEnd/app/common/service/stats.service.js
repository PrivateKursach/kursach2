function statsService($http) {
    var service = this;

    service.getSalesByTypesStats = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/stats/sales-by-types"
        }).then(function (response) {
            return response.data;
        });
    };

    service.getNumberOfOrdersStats = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/stats/number-of-orders"
        }).then(function (response) {
            return response.data;
        });
    };

    service.getProductsByTypesStats = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/stats/products-by-types"
        }).then(function (response) {
            return response.data;
        });
    };
}