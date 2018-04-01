export default function registrationService($http) {
    var service = this;

    service.register = function (registrationData) {
        return $http({
            method: "POST",
            url: ES_REST_SERVER_URI + "/users",
            data: registrationData
        }).then(function (response) {
            return response.data;
        });
    };
}
