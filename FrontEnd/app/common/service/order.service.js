function orderService($http) {
    var service = this;

    service.createOrder = function (order) {
        return $http({
            method: "POST",
            url: "http://localhost:8081/rest/orders",
            data: order
        }).then(function (response) {
            var data = response.data;
            data.status = getStatusString(data.status);
            return data;
        });
    };

    service.getOrdersByUser = function (userId) {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/users/" + userId + "/orders"
        }).then(function (response) {
            var data = response.data;
            data.forEach(function(item, i, arr) {
                item.status = getStatusString(item.status);
            });
            return data;
        });
    };

    service.getAllOrders = function () {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/orders"
        }).then(function (response) {
            var data = response.data;
            data.forEach(function(item, i, arr) {
                item.status = getStatusString(item.status);
            });
            return data;
        });
    };

    service.acceptOrder = function (orderId) {
        return $http({
            method: "PUT",
            url: "http://localhost:8081/rest/orders/" + orderId,
            data: {
                status: 2
            }
        }).then(function (response) {
            var data = response.data;
            data.status = getStatusString(data.status);
            return data;
        });
    };
    
    function getStatusString(statusId) {
        if (statusId == 1) {
            return "На рассмотрении";
        } else if (statusId == 2) {
            return "Принят";
        } else {
            return "";
        }
    }
}