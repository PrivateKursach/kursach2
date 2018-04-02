function sessionService($http) {
    var service = this;

    service.login = function (loginData) {
        return $http({
            method: "POST",
            url: "http://localhost:8081/rest/sessions",
            data: loginData
        }).then(function (response) {
            return response.data;
        });
    };

    service.isLogged = function (rootScope) {
        return rootScope.sessionUserId;
    };
    
    service.isAdmin = function (rootScope) {
        return rootScope.sessionRole == 0;
    };
}