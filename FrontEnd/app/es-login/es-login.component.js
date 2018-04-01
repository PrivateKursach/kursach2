export var esLoginComponent = {
    template: require("./es-login.template.html"),
    controller: LoginComponentController
};

function LoginComponentController(sessionService, $rootScope, $cookies, $state) {
    var $ctrl = this;

    $ctrl.login = function () {
        sessionService.login($ctrl.loginForm).then(function (sessionData) {
            $cookies.put("sessionUserId", sessionData.id);
            $cookies.put("sessionRole", sessionData.role);
            $rootScope.sessionUserId = sessionData.id;
            $rootScope.sessionRole = sessionData.role;
            $state.go("productList");
        });
    };
}