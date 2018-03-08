Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        thousandsSep: ' '
    }
});


Highcharts.chart('graf1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Celková výše zadlužení bezdomovců podle věku'
    },
    xAxis: {
        categories: ['do 35 let', '36 - 55 let', '56 let a více']
    },
    yAxis: {
        title: {
            enabled: false
        },
        tickInterval: 25
    },
    legend: {
          reversed: true
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> %<br/>'    },
    
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
              format: '{y} %'
            },
            stacking: 'percent',
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
        name: 'dluh nad 100 000 Kč',
        data: [51.3, 40.7, 21.6],
        color: '#e41a1c'
    }, {
        name: 'dluh 10 000 Kč - 100 000 Kč',
        data: [26.6, 21.1, 20.5],
        color: '#984ea3',
    }, {
        name: 'dluh 0 - 10 000 Kč',
        data: [7.8, 9.8, 11.4],
        color: '#4daf4a'
    }, {
        name: 'bez dluhů',
        data: [14.3, 28.4, 46.6],
        color: '#377eb8'
    }]
});