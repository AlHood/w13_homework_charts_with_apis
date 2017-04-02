var PieChart = function() {
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title:{
      text: "Pokemon Types I've Caught"
    },
    series: [{
      name: "Type",
      data: [
      {name: "Fire", 
      y: 42,
      color: "tomato"
    },
    {name: "Water",
    y: 27,
    color: "steelBlue",
    sliced: true
  },
  {name: "Fairy",
  y: 1,
  color: "mistyrose"
},

  ]
}]
});


}









