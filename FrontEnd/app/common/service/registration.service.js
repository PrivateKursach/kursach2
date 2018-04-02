function registrationService($http) {
    var service = this;

    service.register = function (registrationData) {
        return $http({
            method: "POST",
            url: "http://localhost:8081/rest/users",
            data: registrationData
        }).then(function (response) {
            return response.data;
        });
    };
}
