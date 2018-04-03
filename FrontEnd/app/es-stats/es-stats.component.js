var esStatsComponent = {
    templateUrl: "./es-stats/es-stats.template.html",
    controller: StatsComponentController
};

function StatsComponentController(statsService, errorMessageService) {
    var $ctrl = this;

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
            plottooltext: "Категория : $label Продажи : $datavalue",
            theme: "fint"
        },
        data: []
    };

    $ctrl.$onInit = function () {
        statsService.getSalesByTypesStats().then(function (stats) {
            console.log(stats);
            var data = [];
            stats.forEach(function (item, i, array) {
                data.push({
                    label: item.productTypeName,
                    value: item.totalSales
                })
            });
            console.log(data);
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
                    plottooltext: "Категория : $label Продажи : $datavalue",
                    theme: "fint"
                },
                data: data
            };
        });
    };
}