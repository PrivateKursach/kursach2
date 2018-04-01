export var esLoginComponent = {
    template: require("./es-login.template.html"),
    controller: LoginComponentController
};

function LoginComponentController(sessionService, $rootScope, $cookies, $state) {
    var $ctrl = this;

    $ctrl.login = function () {
        sessionService.login($ctrl.loginForm).then(function (sessionData) {
            $cookies.put("sessionEmployeeId", sessionData.employeeId);
            $cookies.put("sessionRole", sessionData.role);
            $rootScope.sessionEmployeeId = sessionData.employeeId;
            $rootScope.sessionRole = sessionData.role;
            $state.go("projects");
        });
    };
}