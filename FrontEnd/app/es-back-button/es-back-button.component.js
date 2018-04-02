var esBackButtonComponent = {
    templateUrl : "./es-back-button/es-back-button.template.html",
    controller : BackButtonController,
    bindings : {
        stateInfo: '<'
    }
};

function BackButtonController($state) {
    var $ctrl = this;

    $ctrl.back = function () {
        $state.go($ctrl.stateInfo.name, $ctrl.stateInfo.params);
    };
}