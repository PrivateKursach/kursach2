function orderService($http) {
    var service = this;

    service.createOrder = function (order) {
        return $http({
            method: "POST",
            url: "http://localhost:8081/rest/orders",
            data: order
        }).then(function (response) {
            return response.data;
        });
    };

    service.getOrdersByUser = function (userId) {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/users/" + userId + "/orders"
        }).then(function (response) {
            return response.data;
        });
    };

    service.getAllOrders = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/orders"
        }).then(function (response) {
            return response.data;
        });
    };
}