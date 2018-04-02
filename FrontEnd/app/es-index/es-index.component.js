var esIndexComponent = {
    templateUrl: "./es-index/es-index.template.html",
    controller: IndexComponentController
};

function IndexComponentController(sessionService, $rootScope, $cookies, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.chartData = {
            chart: {
                caption: "Harry's SuperMart",
                subCaption: "Top 5 stores in last month by revenue"
            },
            data:[{
                label: "Bakersfield Central",
                value: "880000"
                },
                {
                    label: "Garden Groove harbour",
                    value: "730000"
                },
                {
                    label: "Los Angeles Topanga",
                    value: "590000"
                },
                {
                    label: "Compton-Rancho Dom",
                    value: "520000"
                },
                {
                    label: "Daly City Serramonte",
                    value: "330000"
                }]
        };
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
