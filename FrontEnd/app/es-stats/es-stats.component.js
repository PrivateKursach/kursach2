var esStatsComponent = {
    templateUrl: "./es-stats/es-stats.template.html",
    controller: StatsComponentController
};

function StatsComponentController(statsService, errorMessageService) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        statsService.getSalesByTypesStats().then(function (stats) {
            $ctrl.stats = stats;
            $ctrl.statsData = 
            $ctrl.salesByTypeChartData = {
                chart: {
                    caption: "Статистика продаж по категориям",
                    subcaption: "",
                    startingangle: "120",
                    showlabels: "0",
                    showlegend: "1",
                    enablemultislicing: "0",
                    slicingdistance: "15",
                    showpercentvalues: "1",
                    showpercentintooltip: "0",
                    plottooltext: "Категория : $productTypeName Продажи : $totalSales",
                    theme: "fint"
                },
                data: $ctrl.stats
            };
        });
    };
}