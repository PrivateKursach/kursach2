export default function orderService($http) {
    var service = this;

    service.createOrder = function (order) {
        return $http({
            method: "POST",
            url: ES_REST_SERVER_URI + "/orders",
            data: order
        }).then(function (response) {
            return response.data;
        });
    };
}