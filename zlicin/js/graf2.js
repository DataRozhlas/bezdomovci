
Highcharts.chart('graf2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Odhadovaná struktura průměrných měsíčních příjmů podle typu "bydlení"'
    },
    xAxis: {
        categories: ['nocující v institucích a bytech', 'nocující venku nebo v noclehárnách']
    },
    yAxis: {
        title: {
            enabled: false
        },
        tickInterval: 500
    },
    legend: {
          reversed: true
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> Kč<br/>'    },
    
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{y:,.0f} Kč'
            },
            stacking: 'normal',
            events: {
                    legendItemClick: function() {
                        return false;
                }
            }
        }
    },
    credits: {
        href: 'http://hobohemia.eu/tiskova-zprava-jak-se-zije-lidem-na-ulici',
      text: 'Zdroj: Sociologický ústav AV ČR'
    },
    series: [{
        name: 'sociální dávky',
        data: [3064, 1100],
        color: '#e41a1c'
    }, {
        name: 'zaměstnání a brigády',
        data: [2130, 609],
        color: '#984ea3',
    }, {
        name: 'pravidelné příspěvky od příbuzných a známých',
        data: [113,152],
        color: '#4daf4a'
    }, {
        name: 'nahodilé a neoficiální příjmy',
        data: [1370,1716],
        color: '#377eb8'
    }]
});