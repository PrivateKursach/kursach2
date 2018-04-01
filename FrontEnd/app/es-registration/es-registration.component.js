export var esRegistrationComponent = {
    template: require("./es-registration.template.html"),
    controller: RegistrationComponentController
};

function RegistrationComponentController(sessionService, $rootScope, $cookies, $state) {
    var $ctrl = this;

    $ctrl.register = function () {
    };
}