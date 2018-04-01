export var esRegistrationComponent = {
    template: require("./es-registration.template.html"),
    controller: RegistrationComponentController
};

function RegistrationComponentController(registrationService, $rootScope, $cookies, $state) {
    var $ctrl = this;

    $ctrl.register = function () {
        registrationService.register($ctrl.registrationForm).then(function (createdUser) {
            $cookies.put("sessionUserId", createdUser.id);
            $cookies.put("sessionRole", createdUser.role);
            $rootScope.sessionUserId = createdUser.id;
            $rootScope.sessionRole = createdUser.role;
            $state.go("productList");
        })
    };
}