var ColumnChart = function() {
  var container = document.querySelector('#bar-graph');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container,
      plotBackgroundColor: '#ECE4B7',
      borderColor: '#EBBA95',
              borderWidth: 2,
              plotShadow: true


    },
    title: {
      text: "Alastair's preference for languages"

    },
    series: [{
      name: "Me",
      data: [6.5, 9, 6, 2, 4]
    }],
    xAxis: {
      categories: ['Ruby', 'Java', 'Javascript', 'Basic', 'French']

    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    }

  })
}