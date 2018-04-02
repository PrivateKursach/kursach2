var esOrderListComponent = {
    templateUrl : "./es-order-list/es-order-list.template.html",
    controller : OrderListController
};

function OrderListController(orderService, sessionService, $rootScope) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        setOrders();
    };
    
    function setOrders() {
        if (sessionService.isAdmin($rootScope)) {
            orderService.getAllOrders().then(function (orders) {
                $ctrl.orderList = orders;
            });
        } else {
            orderService.getOrdersByUser($rootScope.sessionUserId).then(function (orders) {
                $ctrl.orderList = orders;
            })
        }
    }
}