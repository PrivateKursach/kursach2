export default function sessionService($http) {
    var service = this;

    service.login = function (loginData) {
        return $http({
            method: "POST",
            url: ES_REST_SERVER_URI + "/sessions",
            data: loginData
        }).then(function (response) {
            return response.data;
        });
    };
}