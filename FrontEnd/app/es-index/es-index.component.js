export var esIndexComponent = {
    template: require("./es-index.template.html"),
    controller: IndexComponentController
};

function IndexComponentController(sessionService, $rootScope, $cookies, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $rootScope.sessionUserId = $cookies.get("sessionUserId");
        $rootScope.sessionRole = $cookies.get("sessionRole");

        $ctrl.root = $rootScope;
    };

    $ctrl.logout = function () {
        $rootScope.sessionUserId = undefined;
        $rootScope.sessionRole = undefined;
        $cookies.put("sessionUserId", undefined);
        $cookies.put("sessionRole", undefined);

        $state.go("products");
    };
    
    $ctrl.isLogged = function () {
        return sessionService.isLogged($ctrl.root);
    };

    $ctrl.isAdmin = function () {
        return sessionService.isAdmin($ctrl.root);
    };
}
