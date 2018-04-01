export default function productService($http) {
    var service = this;

    service.getAllProducts = function () {
        return $http({
            method: "GET",
            url: ES_REST_SERVER_URI + "/products"
        }).then(function (response) {
            return response.data;
        });
    };
}
